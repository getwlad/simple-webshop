import { createProduct } from "./products/createProduct.js";
import { addToCart } from "./products/addToCart.js";
import { searchProd } from "./products/searchProd.js";
import { filterRange } from "./products/filters/filterRange.js";
import { filterAscending } from "./products/filters/filterAscending.js";
import { filterDescen } from "./products/filters/filterDescending.js";
import { filterminMax } from "./products/filters/filterminMax.js";
import { filterAz } from "./products/filters/filterAz.js";
import { clearFilters } from "./products/filters/clearFilters.js";
$(async () => {
  //Adiciona função ao botao de adicionar ao carrinho
  const addFunctionToCart = () => {
    $(".btn-add-cart").click((e) => addToCart(e, products));
  };

  //Obtém a lista de produtos a partir do json.
  const getProducts = async () => {
    const db = await $.getJSON("../../products/db.json");
    return db;
  };

  //Atualiza a lista de  produtos no html
  const updateProducts = (products) => {
    $(".main").empty();
    products.map((product) => {
      createProduct(product);
    });
    addFunctionToCart();
  };
  // obtem os produtos inicialmente
  const products = await getProducts();
  let sortedProducts = await getProducts();

  updateProducts(products);

  $(".btn-cart").click((e) => $(".full-cart").toggle());

  //-----------Filtros----------------

  // ---------Ordenação

  //filtro crescente
  $("#crescente").click((e) => {
    sortedProducts = filterAscending(sortedProducts);
    updateProducts(sortedProducts);
    toggleSelected(e.target, "selected");
  });

  // filtro decrescente
  $("#decrescente").click((e) => {
    sortedProducts = filterDescen(sortedProducts);
    updateProducts(sortedProducts);
    toggleSelected(e.target, "selected");
  });

  //filtro az
  $("#az").click((e) => {
    sortedProducts = filterAz(sortedProducts);
    updateProducts(sortedProducts);
    toggleSelected(e.target, "selected");
  });

  //Filtro de busca
  $(".btn-busca").click((e) => {
    sortedProducts = searchProd(products);
    updateProducts(sortedProducts);
  });

  //------Filtros de preço

  //Filtro do range
  $(".ipt-range").on("input", (e) => {
    let newerProd = filterRange(e, products, sortedProducts);
    updateProducts(newerProd);
    e.target.setAttribute("id", "rangeAtivo");
  });

  // Filtro minmax
  $("#btn-minmax").click((e) => {
    const newerProd = filterminMax(products, sortedProducts);
    e.target.setAttribute("id", "minMaxAtivo");
    updateProducts(newerProd);
  });

  // Limpar filtros
  const veryfiOrden = (e) => {
    const ordeN = $(".selected");
    if (ordeN.length > 0) {
      ordeN.trigger("click");
    }
  };

  $(".limpar-filtros").click((e) => {
    clearFilters();
    updateProducts(products);
    veryfiOrden(e);
  });

  //--------Funções complementares para os filtros
  //Verifica se o filtro range ou minMax está ativo
  const veryfFilt = () => {
    if (document.getElementById("rangeAtivo")) {
      $(".ipt-range").trigger("input");
    }
    if (document.getElementById("minMaxAtivo")) {
      $("#minMaxAtivo").trigger("click");
    }
  };

  //Define se um filtro de ordenação está selecionado
  const toggleSelected = (element, classe) => {
    if (element.classList.contains(classe)) {
      element.classList.remove(classe);
      updateProducts(products);
      veryfFilt();
    } else {
      $(`.${classe}`).removeClass(classe);
      element.classList.add(classe);
      veryfFilt();
    }
  };

  // Input de busca capturar enter
  $(".ipt-busca").keydown(function (e) {
    const enterKey = 13;
    const escKey = 27;
    console.log(e.which);
    if (enterKey === e.which) {
      $(".btn-busca").trigger("click");
    } else if (escKey === e.which) {
      $(this).val("");
    }
  });
});
