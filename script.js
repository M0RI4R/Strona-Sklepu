// ------------------------BUTTONS------------------------------
const burger = document.querySelector(".burger");
const submitPopup = document.querySelector(".btn-submit");
const btnColeForm = document.querySelector(".close-form");
const btnBrowseCat = document.querySelector(".browse-button");

//-------------------------ICONS--------------------------------
const barsIcon = document.querySelector(".fa-bars");
const xmark = document.querySelector(".x-mark");
const userBtn = document.querySelector(".fa-user");

//---------------------------CONTEINERS-------------------------
const navConteiner = document.querySelector("nav");
const signInPopup = document.querySelector(".sign-in-form");
const body = document.querySelector("body");
const dropDownMenu = document.querySelector(".dropdown-menu");

//---------------------------FUNCTIONS--------------------------

//----HAMBURGER-MENU
const menu = () => {
  barsIcon.classList.toggle("display-none");
  xmark.classList.toggle("display-active");
  navConteiner.classList.toggle("active-nav");
};

//----LOGIN-----REGISTER
const loginPopup = () => {
  signInPopup.classList.add("active-form");
  body.classList.add("blurr");
};
const submitForm = () => {
  body.classList.remove("blurr");
};
const close = () => {
  signInPopup.classList.remove("active-form");
  body.classList.remove("blurr");
};
const categoriesList = (e) => {
  dropDownMenu.classList.toggle("dropdown-menu-active");
};

//----------------------------ADD-EVENT-LISTENERS----------------
burger.addEventListener("click", menu);
userBtn.addEventListener("click", loginPopup);
submitPopup.addEventListener("click", submitForm);
btnColeForm.addEventListener("click", close);
btnBrowseCat.addEventListener("click", categoriesList);
