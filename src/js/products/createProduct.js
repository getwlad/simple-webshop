import { createElement } from "../createElement.js";
const createProduct = (product) => {
  //Imagem
  const imagem = createElement("img");
  imagem.attr({ src: product.img });
  //titulo
  const divTitulo = createElement("div", "titulo");
  const titulo = createElement("h5");
  titulo.append(product.name);
  divTitulo.append(titulo);
  //preco
  const divPreco = createElement("div", "preco");
  const precoDe = createElement("span", "preco-de");
  const precoPor = createElement("span", "preco-por");
  precoDe.append(("R$ " + (product.price + 100).toFixed(2)).replace(".", ","));
  precoPor.append(("R$ " + product.price.toFixed(2)).replace(".", ","));
  divPreco.append(precoDe, precoPor);
  //add-cart
  const addCart = createElement("div", "add-cart");
  const btnCart = createElement("button", "btn-add-cart");
  btnCart.attr({ id: product.id });
  const textCart = createElement("span");
  textCart.append("Adicionar ao carrinho");
  const imgCart = createElement("img", "btn-add-img");
  imgCart.attr({ src: "./assets/icons/cart-arrow-down.svg" });
  btnCart.append(textCart, imgCart);
  addCart.append(btnCart);
  //Div principal
  const divProduto = createElement("div", "product");
  divProduto.append(imagem, divTitulo, divPreco, addCart);
  //main
  const main = $(".main").append(divProduto);
};

export { createProduct, createElement };
