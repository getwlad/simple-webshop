const createElement = (type, classe) => {
  const element = $(`<${type} />`);
  if (classe) {
    element.attr({ class: classe });
  }
  return element;
};

export { createElement };
