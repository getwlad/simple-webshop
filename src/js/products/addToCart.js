import { createElement } from "../createElement.js";
const addToCart = (e, products) => {
  let id = 0;
  if (e.target.parentNode.id) {
    id = e.target.parentNode.id;
  } else {
    id = e.target.id;
  }
  products.forEach((product) => {
    if (product.id == id) {
      productToCart(product);
    }
  });
};
const productToCart = (product) => {
  const name = createElement("span").append(product.name);
  const preco = createElement("span", "preco-cart").append(
    ("R$ " + product.price.toFixed(2)).replace(".", ",")
  );
  const prod = createElement("li", "produto-cart").append(name, preco);
  $(".produtos-cart").append(prod);
  //atualizar total
  updateTotal(product);
};
const updateTotal = (product) => {
  let str = $("#total").text().replace(",", ".");
  const regex = /[+-]?\d+(\.\d+)?/g;
  let total = parseFloat(str.match(regex));
  total = (total + product.price).toFixed(2);
  str = ("Total: R$" + total).replace(".", ",");
  $("#total").contents().remove();
  $("#total").append(str);
};

export { addToCart };
