import { getPokemonData } from "../api.js";
import { changeActiveClass } from "../utils/changeActiveClass.js";
import { paginate } from "./paginate.js";
import { renderDataPokemonById } from "./renderDataPokemonById.js";

export const renderDataPokemon = async (
  url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
) => {
  try {
    const data = await getPokemonData(url);
    console.log(data);

    const urlLink = new URL(url);
    const searchParams = urlLink.searchParams;

    const pokemonIndex = document.querySelector(".pokemon-index");

    const pokemonBadge = document.createElement("div");
    pokemonBadge.classList.add("pokemon-badge");

    const pokemonNameList = document.createElement("div");
    pokemonNameList.classList.add("pokemon-name-list");

    pokemonIndex.appendChild(pokemonBadge);
    pokemonIndex.appendChild(pokemonNameList);

    pokemonNameList.innerHTML = "";
    pokemonBadge.innerHTML = "";

    data.results.forEach((item, index) => {
      const nameItem = document.createElement("h1");
      nameItem.setAttribute("id", index);
      nameItem.classList.add("pokemon-text-list");
      nameItem.onclick = async () => {
        renderDataPokemonById(item.url);
        changeActiveClass(index, "pokemon-text-list", "pokemon-list-active");
        window.scrollTo(0, 0);
      };
      nameItem.textContent = `${String(
        index + 1 + +searchParams.get("offset")
      ).padStart(3, "0")} ${item.name}`;
      pokemonNameList.appendChild(nameItem);

      const badgeItem = document.createElement("img");
      badgeItem.src = "/src/img/badge.png";
      badgeItem.alt = "pokemon-badge.png";
      badgeItem.width = 34;
      badgeItem.height = 34;
      badgeItem.classList.add("pokemon-badge-img");
      pokemonBadge.appendChild(badgeItem);

      const active = document.getElementsByClassName("pokemon-text-list")[0];
      active.classList.add("pokemon-list-active");
    });

    paginate(data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};
