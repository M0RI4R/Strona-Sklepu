// ------------------------BUTTONS------------------------------
const burger = document.querySelector(".burger");
let submitPopup = document.querySelector(".btn-submit");
const btnColeForm = document.querySelector(".close-form");
const btnBrowseCat = document.querySelector(".browse-button");
const changeForm = document.querySelector(".change-form");
let addToCartBtn = document.querySelectorAll(".add-to-cart");

//-------------------------ICONS--------------------------------
const barsIcon = document.querySelector(".fa-bars");
const xmark = document.querySelector(".x-mark");
const userBtn = document.querySelector(".fa-user");
let headerPopup = document.querySelector(".header-popup");
const emailFormInput = document.querySelector(".mail-input");
let itemNumber = document.querySelector(".number-of-items");

//---------------------------CONTEINERS-------------------------
const navConteiner = document.querySelector("nav");
const signInPopup = document.querySelector(".sign-in-form");
const formEmailPopup = document.querySelector(".form-email-popup");
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
  signInPopup.classList.remove("active-form");
  body.classList.remove("blurr");
};
const close = () => {
  signInPopup.classList.remove("active-form");
  body.classList.remove("blurr");
};
const categoriesList = () => {
  dropDownMenu.classList.toggle("dropdown-menu-active");
};
const changeFormSign = () => {
  formEmailPopup.classList.toggle("form-email-popup");
  emailFormInput.setAttribute("required", true);

  if (formEmailPopup.classList != "form-email-popup") {
    submitPopup.textContent = "Sign up";
    headerPopup.textContent = "Sign up";
    changeForm.textContent = "Are you a member? Sign in";
  } else {
    submitPopup.textContent = "Sign in";
    headerPopup.textContent = "Sign in";
    changeForm.textContent = "Are you not a member? Sign up";
  }
};
//------------------------------------------ADDING-TO-CART-NUMBER-OF-PRODUCTS-----------------
let product = [
  {
    name: "Camera",
    tag: "camera",
    price: 300,
    inCart: 0,
  },
];
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", () => {
    console.log("added to cart");
    cartNumbers();
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    itemNumber.textContent = productNumbers;
  }
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    itemNumber.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    itemNumber.textContent = 1;
  }
}
onLoadCartNumbers();

//----------------------------ADD-EVENT-LISTENERS----------------
burger.addEventListener("click", menu);
userBtn.addEventListener("click", loginPopup);
submitPopup.addEventListener("submit", submitForm);
btnColeForm.addEventListener("click", close);
btnBrowseCat.addEventListener("click", categoriesList);
changeForm.addEventListener("click", changeFormSign);
