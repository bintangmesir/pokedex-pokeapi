export function changeActiveClass(id, classTarget, classActive) {
  const actived = document.querySelector(`.${classActive}`);
  const active = document.getElementsByClassName(`${classTarget}`)[id];

  actived.classList.remove(classActive);
  active.classList.add(classActive);
}
