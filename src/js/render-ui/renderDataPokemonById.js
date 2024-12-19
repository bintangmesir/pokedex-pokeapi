import { getPokemonDataById } from "../api.js";

const renderTitlePokemon = (name) => {
  const pokemonTitle = document.querySelector(".pokemon-title");

  if (!pokemonTitle) {
    const pokemonWrapperTitle = document.querySelector(
      ".pokemon-wrapper-title"
    );
    const pokemonTitle = document.createElement("h1");
    pokemonTitle.classList.add("pokemon-text");
    pokemonTitle.classList.add("pokemon-title");
    pokemonTitle.innerHTML = name;
    pokemonWrapperTitle.appendChild(pokemonTitle);
    return;
  }

  pokemonTitle.innerHTML = name;
  return;
};

const renderImagePokemon = (dataImg) => {
  const pokemonWrapperImage = document.querySelector(".pokemon-wrapper-image");
  const pokemonSpritesList = document.querySelector(".pokemon-sprites-list");

  if (pokemonSpritesList) {
    pokemonSpritesList.remove();
  }

  const spritesList = document.createElement("select");
  spritesList.name = "sprites";
  spritesList.classList.add("pokemon-sprites-list");
  spritesList.onchange = async () => {
    const spritesKey = document.querySelector(".pokemon-sprites-list");
    pokemonImg.setAttribute("src", dataImg[spritesKey.value]);
  };

  Object.keys(dataImg).map((item) => {
    if (dataImg[item] && item !== "other" && item !== "versions") {
      const spritesOption = document.createElement("option");
      spritesOption.value = item;
      spritesOption.text = item.replace(/_/g, " ");
      if (item === "front_default") {
        spritesOption.selected = true;
      }
      spritesList.appendChild(spritesOption);
    }
  });

  pokemonWrapperImage.appendChild(spritesList);

  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  pokemonImg.width = 240;
  pokemonImg.setAttribute("src", dataImg.front_default);
  pokemonWrapperImage.appendChild(pokemonImg);
};

const renderPokemonType = (dataType) => {
  const pokemonDescriptionWrapper = document.createElement("div");
  pokemonDescriptionWrapper.classList.add("pokemon-description-wrapper");

  const pokemonType = document.createElement("ol");
  pokemonType.classList.add("pokemon-type");

  const pokemonTypeTitle = document.createElement("h1");
  pokemonTypeTitle.classList.add("pokemon-text");
  pokemonTypeTitle.innerHTML = "Type:";

  const pokemonDescription = document.querySelector(".pokemon-description");
  pokemonDescription.appendChild(pokemonDescriptionWrapper);
  pokemonDescriptionWrapper.appendChild(pokemonTypeTitle);

  dataType.forEach((item, index) => {
    const nameItem = document.createElement("li");
    nameItem.classList.add("pokemon-type-list");
    nameItem.classList.add(`${item.type.name}`);
    nameItem.textContent = item.type.name;
    nameItem.setAttribute("id", index);
    pokemonType.appendChild(nameItem);
  });

  pokemonDescriptionWrapper.appendChild(pokemonType);

  const br = document.createElement("br");
  pokemonDescription.appendChild(br);
};

const renderPokemonStats = (stats) => {
  const pokemonDescriptionWrapper = document.createElement("div");
  pokemonDescriptionWrapper.classList.add("pokemon-description-wrapper");

  const pokemonStats = document.createElement("ul");
  pokemonStats.classList.add("pokemon-stats");

  const pokemonStatsTitle = document.createElement("h1");
  pokemonStatsTitle.classList.add("pokemon-text");
  pokemonStatsTitle.innerHTML = "Stats:";

  const pokemonDescription = document.querySelector(".pokemon-description");
  pokemonDescription.appendChild(pokemonDescriptionWrapper);
  pokemonDescriptionWrapper.appendChild(pokemonStatsTitle);

  stats.forEach((item, index) => {
    const liItem = document.createElement("li");
    liItem.classList.add("pokemon-list-stats");
    liItem.setAttribute("id", index);

    const nameItem = document.createElement("h1");
    nameItem.textContent = item.stat.name;
    liItem.appendChild(nameItem);

    const nameItem2 = document.createElement("h1");
    nameItem2.textContent = item.base_stat;
    liItem.appendChild(nameItem2);

    pokemonStats.appendChild(liItem);
  });

  pokemonDescriptionWrapper.appendChild(pokemonStats);
};

export const renderDataPokemonById = async (
  url = "https://pokeapi.co/api/v2/pokemon/1"
) => {
  try {
    const data = await getPokemonDataById(url);

    renderTitlePokemon(data.name);
    renderImagePokemon(data.sprites);
    renderPokemonType(data.types);
    renderPokemonStats(data.stats);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};
