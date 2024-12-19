import { removeAllChildNode } from "./removeAllChildNodes.js";

export function loader(status, classTarget, removeAllChild) {
  const classElement = document.querySelector(`.${classTarget}`);

  if (status) {
    if (classElement.lastChild && removeAllChild) {
      removeAllChildNode(classElement);
    } else if (classElement.lastChild) {
      classElement.removeChild(classElement.lastChild);
    }

    const loader = document.createElement("h1");
    loader.classList.add("loader");
    loader.innerHTML = "Loading...";
    classElement.appendChild(loader);

    return;
  } else {
    if (classElement) {
      classElement.removeChild(classElement.lastChild);
    }
    return;
  }
}
