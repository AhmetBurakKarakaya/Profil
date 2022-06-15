function acSolMenu() {
  document.querySelector("#close").classList.remove("d-none");
  document.querySelector(".main").classList.add("col-sm-8");
  document.querySelector(".open").classList.add("d-none");
}

function kapatSolMenu() {
  document.querySelector("#close").classList.add("d-none");
  document.querySelector(".open").classList.remove("d-none");
  document.querySelector(".main").classList.remove("col-sm-8");
}
