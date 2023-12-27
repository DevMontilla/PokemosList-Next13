import { FavoritePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "My favorites pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-medium">Favorites</h1>
      <span className="text-sm font-light">My favorites Pokemons</span>
      <div className="flex flex-col">
        <FavoritePokemons />
      </div>
    </div>
  );
}