export const removeChildren = node => {
  while(node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
};