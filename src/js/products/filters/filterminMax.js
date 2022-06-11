const filterminMax = (products, newProducts) => {
  let min = $("#ipt-min").val();
  let max = $("#ipt-max").val();
  if (!max) {
    max = 99999999;
  }
  if (!min) {
    min = 0;
  }
  let newerProd = products;
  if (document.querySelector(".selected")) {
    newerProd = newProducts.filter((product) => {
      if (product.precoPor >= min && product.precoPor <= max) {
        return product;
      }
    });
  } else {
    newerProd = products.filter((product) => {
      if (product.precoPor >= min && product.precoPor <= max) {
        return product;
      }
    });
  }
  return newerProd;
};

export { filterminMax };
