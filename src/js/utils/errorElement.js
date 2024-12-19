export function errorElement(classTarget) {
  const classElement = document.querySelector(`.${classTarget}`);

  const errorElement = document.createElement("h1");
  errorElement.classList.add("error");
  errorElement.innerHTML =
    "Something went wrong, please check your connection.";

  classElement.appendChild(errorElement);
}
