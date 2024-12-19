export function removeAllChildNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
