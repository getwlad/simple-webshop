const filterDescen = (products) => {
  const newProducts = products.sort((product1, product2) => {
    if (product1.precoPor < product2.precoPor) {
      return 1;
    }
    if (product1.precoPor > product2.precoPor) {
      return -1;
    }
    return 0;
  });
  return newProducts;
};

export { filterDescen };
