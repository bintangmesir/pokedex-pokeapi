import { renderDataPokemon } from "./renderDataPokemon.js";

export const paginate = (data) => {
  if (data.next) {
    const pokemonNext = document.querySelector(".pokemon-next");
    pokemonNext.disabled = false;
    pokemonNext.onclick = async () => {
      renderDataPokemon(data.next);
    };
  } else {
    const pokemonNext = document.querySelector(".pokemon-next");
    pokemonNext.disabled = true;
  }

  if (data.previous) {
    const pokemonPrev = document.querySelector(".pokemon-prev");
    pokemonPrev.disabled = false;
    pokemonPrev.onclick = async () => {
      renderDataPokemon(data.previous);
    };
  } else {
    const pokemonPrev = document.querySelector(".pokemon-prev");
    pokemonPrev.disabled = true;
  }
};
