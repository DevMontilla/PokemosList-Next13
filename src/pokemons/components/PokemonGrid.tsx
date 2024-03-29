import { SimplePokemon } from "..";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="p-2 flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
}
