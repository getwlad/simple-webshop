const clearFilters = () => {
  const range = document.getElementById("rangeAtivo");
  const minMax = document.getElementById("minMaxAtivo");
  if (range) {
    range.removeAttribute("id");
    $("#p-range").text("Sem Filtro");
  }
  if (minMax) {
    minMax.removeAttribute("id");
  }
};

export { clearFilters };
