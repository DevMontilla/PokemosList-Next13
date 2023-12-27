import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //   throw new Error('Esto es un error que no deberia ocurrir')
  //   throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(152);

  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-medium">Pokemons</h1>
      <span className="text-sm font-light">List of Pokemons</span>
      <div className="flex flex-col">
        {/* Listado de Pokemons <small>(estático)</small> */}
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
