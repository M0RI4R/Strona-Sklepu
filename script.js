// ------------------------BUTTONS------------------------------
const burger = document.querySelector(".burger");
let submitPopup = document.querySelector(".btn-submit");
const btnColeForm = document.querySelector(".close-form");
const btnBrowseCat = document.querySelector(".browse-button");
const changeForm = document.querySelector(".change-form");

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
let shopItemsConteiner = document.querySelector("#shop-items");

//----------------------------INPUTS--------------------------------

//----------------------------SHOP-ITEMS-DATA----------------------

let shopItemsData = [
  {
    id: "1",
    name: "Camera Nikon",
    price: 200,
    img: "images/camera 1.svg",
    inCart: 0,
  },
  {
    id: "2",
    name: "Laptop Lenovo",
    price: 2500,
    img: "images/Frame 29 (2).svg",
    inCart: 0,
  },
  {
    id: "3",
    name: "Pad X-box",
    price: 100,
    img: "images/Frame 29 (1).svg",
    inCart: 0,
  },
  {
    id: "4",
    name: "Headphones",
    price: 50,
    img: "images/Frame 29.svg",
    inCart: 0,
  },
  {
    id: "5",
    name: "Pad X-box",
    price: 100,
    img: "images/Frame 29 (1).svg",
    inCart: 0,
  },
  {
    id: "6",
    name: "Laptop Lenovo",
    price: 2500,
    img: "images/Frame 29 (2).svg",
    inCart: 0,
  },
  {
    id: "7",
    name: "Camera Canon",
    price: 200,
    img: "images/camera 1.svg",
    inCart: 0,
  },
  {
    id: "8",
    name: "Headphones",
    price: 50,
    img: "images/Frame 29.svg",
    inCart: 0,
  },
];
//---------------------------FUNCTIONS--------------------------

//--------------------------------------------GEBERATE-SHOP-ITEM---------------

let generateShop = () => {
  if (shopItemsConteiner) {
    return (shopItemsConteiner.innerHTML = shopItemsData
      .map((x) => {
        return `
    <li id=${x.id}>
            <a href="controler1.html">
              <img
                alt="aparat"
                src="${x.img}"
                width="283px"
                height="169px"
              />
              <h3>${x.name}</h3>
              <p class="price">$ ${x.price}</p>
              <div class="ratio">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
            </a>
            <button  class="add-to-cart" type="button">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
`;
      })
      .join(""));
  }
};
generateShop();

//-----------------------BUTTON------------
let addToCartBtn = document.querySelectorAll(".add-to-cart");

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

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", () => {
    cartNumbers(shopItemsData[i]);
    totalCost(shopItemsData[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    itemNumber.textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    itemNumber.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    itemNumber.textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.id] == undefined) {
      cartItems = {
        ...cartItems,
        [product.id]: product,
      };
    }
    cartItems[product.id].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.id]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + parseInt(product.price));
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartProductConteiner = document.querySelector("tbody");
  if (cartItems && cartProductConteiner) {
    cartProductConteiner.innerHTML = "";
    Object.values(cartItems).map((item) => {
      cartProductConteiner.innerHTML += ` 
              <tr >
                <td class="cart-items-list">
                  <div class="cart-info">
                    <img src="${item.img}" />
                    <ul class="flex-column">
                      <li><h3>${item.name}</h3></li>
                      <li>Color: Green</li>
                      <li>Size: 30</li>
                    </ul>
                  </div>
                </td>

                <td id="item-price" value="${item.price}">${item.price}</td>
                <td><li>
                  <button class="decrease-btn" type="button">-</button>
                  <input
                    class="quantity-input"
                    type="number"
                    id="quantity"
                    value="${item.inCart}"
                    min="1"
                    max="99"
                  />
                  <button class="increase-btn" type="button">+</button>
                </li></td>
                <td class="subtotal-one-item" ></td>
                <td><input type="checkbox" id="remove" /></td>
              </tr>
            `;
    });
  }
}
onLoadCartNumbers();
displayCart();
//-----------------------------INCREASE/DECREASE-ITEM-NUMBER-----------------------

const increaseBtn = document.querySelectorAll(".increase-btn");
const decreaseBtn = document.querySelectorAll(".decrease-btn");
let quantityInput = document.querySelectorAll(".quantity-input");
const cartItemsList = document.querySelectorAll(".cart-items-list");
let subtotalOneItem = document.querySelectorAll(".subtotal-one-item");
let itemPrice = document.querySelectorAll("#item-price");

for (let i = 0; i < increaseBtn.length; i++) {
  increaseBtn[i].addEventListener("click", () => {
    increase(quantityInput[i]);
    cartNumbers(shopItemsData[i]);
    totalCost(shopItemsData[i]);
    subtotal(subtotalOneItem[i], quantityInput[i], itemPrice[i]);
  });
  decreaseBtn[i].addEventListener("click", () => {
    decrease(quantityInput[i]);
    totalCostDecrease(shopItemsData[i]);
    cartNumbersDecrease(shopItemsData[i]);
    subtotal(subtotalOneItem[i], quantityInput[i], itemPrice[i]);
  });
}

let increase = (quantityInput) => {
  quantityInput.valueAsNumber += 1;
};
let decrease = (quantityInput) => {
  if (quantityInput.valueAsNumber == 1) {
    return;
  } else {
    quantityInput.valueAsNumber -= 1;
  }
};
function subtotal(subtotalOneItem, quantityInput, itemPrice) {
  quantityInput.value = parseInt(quantityInput.value);
  itemPrice.value = parseInt(itemPrice.value);
  subtotalOneItem.textContent = `${quantityInput.value + itemPrice.value}`;
  // let cartItems = localStorage.getItem("productsInCart");
  // cartItems = JSON.parse(cartItems);
  // console.log(cartItems);
  // Object.values(cartItems).forEach((item) => {
  //   subtotalOneItem = `$ ${item.price * item.inCart}`;
  // });
  // console.log(subtotalOneItem);
  console.log(subtotalOneItem.textContent);
  console.log(quantityInput.value);
  console.log(typeof itemPrice.value);
}
function totalCostDecrease(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers <= cartItemsList.length) {
    return;
  } else {
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost - parseInt(product.price));
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }
}
function cartNumbersDecrease(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers == cartItemsList.length) {
    return;
  } else {
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      itemNumber.textContent = productNumbers - 1;
    }
    setItemsDecrease(product);
  }
}
function setItemsDecrease(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  cartItems[product.id].inCart -= 1;

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//----------------------------ADD-EVENT-LISTENERS----------------
burger.addEventListener("click", menu);
userBtn.addEventListener("click", loginPopup);
submitPopup.addEventListener("submit", submitForm);
btnColeForm.addEventListener("click", close);
btnBrowseCat.addEventListener("click", categoriesList);
changeForm.addEventListener("click", changeFormSign);
