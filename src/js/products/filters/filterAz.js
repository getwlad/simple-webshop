const filterAz = (newProducts) => {
  const productsAz = newProducts.sort((product1, product2) => {
    if (product1.title > product2.title) {
      return 1;
    }
    if (product1.title < product2.title) {
      return -1;
    }
    return 0;
  });
  return productsAz;
};

export { filterAz };
