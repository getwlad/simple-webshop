const filterAscending = (products) => {
  const newProducts = products.sort((product1, product2) => {
    if (product1.price > product2.price) {
      return 1;
    }
    if (product1.price < product2.price) {
      return -1;
    }
    return 0;
  });
  return newProducts;
};

export { filterAscending };
