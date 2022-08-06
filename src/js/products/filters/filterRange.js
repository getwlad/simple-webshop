const filterRange = (e, products, newProducts) => {
  const valor = e.target.value;
  $("#p-range").text(`De R$ 0 a R$ ${valor}`);
  if (document.querySelector(".selected")) {
    return newProducts.filter((product) => {
      if (product.price < valor) {
        return product;
      }
    });
  } else {
    return products.filter((product) => {
      if (product.price < valor) {
        return product;
      }
    });
  }
};

export { filterRange };
