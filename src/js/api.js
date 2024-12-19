import { errorElement } from "./utils/errorElement.js";
import { loader } from "./utils/loader.js";

export const getPokemonData = async (url) => {
  try {
    loader(true, "pokemon-index", true);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (e) {
    if (e) errorElement("pokemon-index");
    throw Error;
  } finally {
    loader(false, "pokemon-index");
  }
};

export const getPokemonDataById = async (url) => {
  try {
    loader(true, "pokemon-wrapper-title");
    loader(true, "pokemon-wrapper-image");
    loader(true, "pokemon-description", true);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (e) {
    if (e) {
      errorElement("pokemon-wrapper-title");
      errorElement("pokemon-wrapper-image");
      errorElement("pokemon-description");
    }
    throw Error;
  } finally {
    loader(false, "pokemon-wrapper-title");
    loader(false, "pokemon-wrapper-image");
    loader(false, "pokemon-description");
  }
};
