import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsFavoriteState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {
  // const favorites = JSON.parse(
  //   localStorage.getItem("favorite-pokemons") ?? "{}"
  // );

//   return favorites;
// };

const initialState: PokemonsFavoriteState = {
  favorites: {}
  // ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFavoritePokemons (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      // TODO: Esto no se debe de hacer en REDUx
      localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
