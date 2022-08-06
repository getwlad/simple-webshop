const filterAz = (newProducts) => {
  const productsAz = newProducts.sort((product1, product2) => {
    if (product1.name > product2.name) {
      return 1;
    }
    if (product1.name < product2.name) {
      return -1;
    }
    return 0;
  });
  return productsAz;
};

export { filterAz };
