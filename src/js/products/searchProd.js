String.prototype.indexOfCaseIns = function (searchValue, fromIndex) {
  return this.toLowerCase().indexOf(searchValue.toLowerCase(), fromIndex);
};
const searchProd = (products) => {
  return products.filter((product) => {
    const prodSearched = $(".ipt-busca").val();
    if (product.name.indexOfCaseIns(prodSearched) >= 0) {
      return product;
    }
  });
};
export { searchProd };
