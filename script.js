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
const slider1 = document.querySelector(".slider");
const slider2 = document.querySelector(".slider2");
const categorieItems = document.querySelector(".categories");
const emptyState = document.querySelector(".empty-state-search");
const sectionCart = document.querySelector(".cart");
const cartTotal = document.querySelector(".card-table-right");

//----------------------------INPUTS--------------------------------

//--------------------------------------------CAROUSEL-FIRST-PAGE--------------
function nextSlide() {
  slider1.classList.toggle("active");
  slider2.classList.toggle("active");
}
if (slider1) {
  setInterval(nextSlide, 7000);
}
//----------------------------SHOP-ITEMS-DATA----------------------

let shopItemsData = products;

//--------------------------------------------GENERATE-SHOP-ITEM---------------

const generateShop = (items) => {
  if (shopItemsConteiner) {
    shopItemsConteiner.innerHTML = "";
  }
  for (let i = 0; i < items.length; i++) {
    const newProduct = document.createElement("li");
    newProduct.classList.add("link-to-item-details");
    newProduct.innerHTML = `
    
            <a  href="controler1.html">

              <img
                alt="aparat"
                src="${items[i].img}"
                width="284px"
                height="240px"
              />
              <h3>${items[i].name}</h3>
              <p class="price">$ ${items[i].price}</p>
              <div class="ratio">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
            </a>
            <button  class="add-to-cart" type="button">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          
`;
    if (shopItemsConteiner) {
      shopItemsConteiner.appendChild(newProduct);
    }
  }
  let addToCartBtn = document.querySelectorAll(".add-to-cart");

  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", () => {
      cartNumbers(shopItemsData[i]);
      totalCost(shopItemsData[i]);
      console.log(addToCartBtn);
    });
  }
  const shopItemInfo = document.querySelectorAll(".link-to-item-details");

  for (let i = 0; i < shopItemInfo.length; i++) {
    shopItemInfo[i].addEventListener("click", () => {
      currentItemInfo(shopItemsData[i]);
    });
  }
};

//--------------------------------------------GENERATE-CATEGORIES-MAIN---------

let categories = new Set();

const renderCategories = (item) => {
  for (let i = 0; i < item.length; i++) {
    categories.add(item[i].categories);
  }

  categories = ["All categories", ...categories];

  categories.forEach((el, index) => {
    const newCategory = document.createElement("button");
    newCategory.innerHTML = el;
    newCategory.dataset.el = el;
    if (categorieItems) {
      categorieItems.appendChild(newCategory);
    }
    newCategory.classList.add("button-categories");
    index === 0 ? newCategory.classList.add("button-categories-active") : "";
  });
};
document.onload = generateShop(shopItemsData);
document.onload = renderCategories(shopItemsData);

const categoriesBtn = document.querySelectorAll(".button-categories");

categoriesBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    categoriesBtn.forEach((btn) =>
      btn.classList.remove("button-categories-active")
    );
    const category = e.target.dataset.el;
    e.target.classList.add("button-categories-active");

    shopItemsData = products;
    if (category == "All categories") {
      shopItemsData = products;
    } else {
      shopItemsData = shopItemsData.filter(
        (product) => product.categories === category
      );
    }

    generateShop(shopItemsData);
  })
);

//--------------------------------------------ITEM-DETAILS---------------------
const currentItemConteiner = document.querySelector(".product");

const currentItemInfo = (product) => {
  let currrentWatchingProduct = null;

  currrentWatchingProduct = localStorage.setItem(
    "currentProduct",
    JSON.stringify(product)
  );
};

const generateCurrentItemInfo = () => {
  let product = localStorage.getItem("currentProduct");
  product = JSON.parse(product);

  if (currentItemConteiner) {
    currentItemConteiner.innerHTML = `
   
    <div class="product-grid-left">    
         <span> <img class="main-img" src="${product.img}"  /> </span>
         <span> <img class="small-img" src="${product.img2}" /> </span>
         <span> <img class="small-img" src="${product.img3}" /> </span>
         <span> <img class="small-img" src="${product.img}" /> </span>
        </div>
        <div class="product-description">
          <ul>
            <li class="product-description-item">
              <ul>
                <li><h2>${product.name}</h2></li>
                <li><p id="#item-price" class="price">${product.price} $</p></li>
                <li>
                  <div class="ratio">
                    <i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                  </div>
                </li>
                <li>
                  <ul class="flex">
                    <li><h3>Avallability :</h3></li>
                    <li>
                      <i class="fa-solid fa-check color-available"></i>
                      <span class="color-available">In stock</span>
                    </li>
                  </ul>
                </li>
                <li><p>Hurry up! Only ${product.quantity} product left in stock</p></li>
              </ul>
            </li>
            <li class="product-description-item">
              <ul>
                <li>
                  <h3>color :</h3>
                </li>

                <li>
                  <input
                    class="item-color-yellow"
                    type="radio"
                    name="color"
                    id="yellow"
                  />
                  <label class="yellow" for="yellow"></label>
                </li>
                <li>
                  <input
                    class="item-color-black"
                    type="radio"
                    name="color"
                    id="black"
                  /><label for="black" class="black"></label>
                </li>
              </ul>
              <ul class="size-conteiner">
                <li><h3>Size :</h3></li>
                <li>
                  <input
                    class="chose-size-input"
                    name="size"
                    type="radio"
                    id="size30"
                  />
                  <label class="chose-size-label" for="size30">30</label>
                </li>
                <li>
                  <input
                    class="chose-size-input"
                    name="size"
                    type="radio"
                    id="size42"
                  />
                  <label class="chose-size-label" for="size42">42</label>
                </li>
                <li>
                  <input
                    class="chose-size-input"
                    name="size"
                    type="radio"
                    id="size48"
                  />
                  <label class="chose-size-label" for="size48">48</label>
                </li>
                <li>
                  <input
                    class="chose-size-input"
                    name="size"
                    type="radio"
                    id="size56"
                  />
                  <label class="chose-size-label" for="size56">56</label>
                </li>
              </ul>
              <ul>
                <li><h3>Quantity :</h3></li>
                <li>
                  <button class="decrease-btn-current-product" type="button">-</button>
                  <input
                    class="quantity-input-current-product"
                    type="number"
                    id="quantity"
                    value="1"
                    min="1"
                    max="99"
                  />
                  <button class="increase-btn-current-product" type="button">+</button>
                </li>
              </ul>
              <ul>
                <li>
                  <button type="button" class="more-details-button add-to-cart-current-item ">
                    Add to cart
                  </button>
                  <button type="button" class="more-details-button">
                    Buy it now
                  </button>
                  <input type="checkbox" class="add-to favourite" />
                </li>
              </ul>
            </li>
            <li class="product-description-item">
              <ul>
                <li><h3>Sku :</h3></li>
                <li>0${product.sku}</li>
              </ul>
              <ul>
                <li><h3>Category:</h3></li>
                <li>${product.categories}</li>
               
              </ul>
              <ul>
                <li><h3>Share :</h3></li>
                <li>G</li>
                <li>F</li>
                <li>W</li>
              </ul>
            </li>
          </ul>
        </div>`;

    addCurrentWatchingItem();
  }
};

document.onload = generateCurrentItemInfo();
// -------------------------------------------SEARCH-INPUT------------------
const searchStore = document.querySelectorAll(".search-store");
searchStore.forEach((btn) =>
  btn.addEventListener("input", (e) => {
    const search = e.target.value;
    console.log(search);
    const foundProducts = shopItemsData.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase()))
        return product;
    });
    foundProducts.length === 0
      ? emptyState.classList.add("empty-state-search-active")
      : emptyState.classList.remove("empty-state-search-active");
    generateShop(foundProducts);
  })
);

//------------------------------------------ADDING-TO-CART-NUMBER-OF-PRODUCTS-----------------

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

  if (!sectionCart) {
    setItems(product);
  } else {
    return;
  }
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
    console.log(cartCost);

    localStorage.setItem("totalCost", cartCost + parseInt(product.price));
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

const CartTotal = () => {
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  let totalPrice = document.querySelector(".cart-subtotal-price");
  let totalAmount = document.querySelector(".cart-total-amount");

  if (cartTotal) {
    totalPrice.innerHTML = `${cartCost} $`;
    totalAmount.innerHTML = `${cartCost} $`;
  } else if (cartTotal) {
    totalPrice.innerHTML = "00,00$";
    totalAmount.innerHTML = "00,00$";
  }
};

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cartProductConteiner = document.querySelector("tbody");

  if (cartItems && cartProductConteiner) {
    cartProductConteiner.innerHTML = "";
    Object.values(cartItems).map((item) => {
      cartProductConteiner.innerHTML += ` 
              <tr class="table-row">
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

                <td id="item-price" >${item.price} $</td>
                <td><li class="cart-quantity-item">
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
                <td class="subtotal-one-item" >${
                  item.price * item.inCart
                } $</td>
                <td><i id="remove" class="fa-solid fa-trash-can"></i></td>
              </tr>
            `;
    });
  }
  CartTotal();
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

let currentProduct;
let subtotalAllItems = [];
let subtotalSum = quantityInput.length;
let subtotalQuantityInput = [];
let subtotalQuantityInputSum = quantityInput.length;

for (let i = 0; i < increaseBtn.length; i++) {
  increaseBtn[i].addEventListener("click", () => {
    cartNumbers(shopItemsData[i]);
    increase(quantityInput[i]);
    if (sectionCart) {
      subtotal(subtotalOneItem[i], quantityInput[i], itemPrice[i]);
    }
    inCartIncrease(i);
    CartTotal();
    console.log(itemPrice[i]);
  });

  decreaseBtn[i].addEventListener("click", () => {
    inCartDecrease(i);
    cartNumbersDecrease(shopItemsData[i], i);

    decrease(quantityInput[i]);
    if (sectionCart) {
      subtotal(subtotalOneItem[i], quantityInput[i], itemPrice[i]);
    }
    CartTotal();

    subtotalPrice();
  });
}

function subtotalPrice() {
  subtotalAllItems = [];
  subtotalQuantityInput = [];
  itemPrice.forEach((price) => {
    subtotalAllItems.push(parseInt(price.textContent.replace(/\D/g, "")));
  });

  itemPrice.forEach((quan) => {
    subtotalQuantityInput.push(parseInt(quan.value));
  });

  subtotalSum = subtotalAllItems.reduce(function (a, b) {
    return a + b;
  });

  subtotalQuantityInputSum = subtotalQuantityInput.reduce(function (a, b) {
    return a + b;
  });
}

// ---------------------------------------------INCREASE--------------

function inCartIncrease(item) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  currentProduct = cartItems[Object.keys(cartItems)[item]].id;
  cartItems[currentProduct].inCart += 1;
  let currentProductPrice = cartItems[Object.keys(cartItems)[item]];
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  totalCost(currentProductPrice);
}

let increase = (quantityInput) => {
  quantityInput.valueAsNumber += 1;
};

// --------------------------------------------------DECREASE-----------------

let decrease = (quantityInput) => {
  if (quantityInput.valueAsNumber == 1) {
    return;
  } else {
    quantityInput.valueAsNumber -= 1;
  }
};

function cartNumbersDecrease(product, i) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (quantityInput[i].value > 1) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    itemNumber.textContent = productNumbers - 1;
  } else if (parseInt(quantityInput[i].value) == 1) {
    localStorage.setItem("cartNumbers", productNumbers);
    itemNumber.textContent = productNumbers;
  }

  if (!sectionCart) {
    setItems(product);
  } else {
    return;
  }
}
function subtotal(subtotalOneItem, quantityInput, itemPrice) {
  quantityInput.value = parseInt(quantityInput.value);
  itemPrice.textContent = parseInt(itemPrice.textContent);

  subtotalOneItem.textContent = ` ${
    quantityInput.value * itemPrice.textContent
  } $`;
  itemPrice.textContent += " $";
}

function inCartDecrease(item) {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);
  cartCost = parseInt(cartCost);

  currentProduct = cartItems[Object.keys(cartItems)[item]].id;
  let currentProductPrice1 = cartItems[Object.keys(cartItems)[item]].price;
  console.log(quantityInput[item].value);

  if (quantityInput[item].value == 1) {
    localStorage.setItem("totalCost", cartCost);
  } else {
    localStorage.setItem(
      "totalCost",
      cartCost - parseInt(currentProductPrice1)
    );
  }

  cartItems[currentProduct].inCart -= 1;

  if ((cartItems[currentProduct].inCart = 1)) {
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  } else {
    return;
  }
}
//---------------------------------ADD-TO-CART-CURRENT-WATCHING-ITEM---

function addCurrentWatchingItem() {
  const addToCartCurrentItemBtn = document.querySelector(
    ".add-to-cart-current-item"
  );
  const decreaseBtnCurrentProduct = document.querySelector(
    ".decrease-btn-current-product"
  );
  const increaseBtnCurrentProduct = document.querySelector(
    ".increase-btn-current-product"
  );
  let inputCurrentProduct = document.querySelector(
    ".quantity-input-current-product"
  );
  const currentProductPrice = document.querySelector(".price");
  const currentPriceNumberValue = parseInt(
    currentProductPrice.textContent.replace(/\D/g, "")
  );
  const yellowColourBtn = document.querySelector(".yellow");
  const blackColourBtn = document.querySelector(".black");

  increaseBtnCurrentProduct.addEventListener("click", () => {
    inputCurrentProduct.valueAsNumber += 1;
  });

  decreaseBtnCurrentProduct.addEventListener("click", () => {
    if (inputCurrentProduct.valueAsNumber == 1) {
      return;
    } else {
      inputCurrentProduct.valueAsNumber -= 1;
    }
  });

  addToCartCurrentItemBtn.addEventListener("click", () => {
    let product = localStorage.getItem("currentProduct");
    product = JSON.parse(product);

    product.inCart = inputCurrentProduct.value;
    if (product.id == undefined) {
      return;
    } else if (product) {
      const addInfoProduct = {
        [product.id]: product,
      };

      localStorage.setItem(
        "currentProductInCart",
        JSON.stringify(addInfoProduct)
      );

      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);

      if (cartItems) {
        let returnTarget = Object.assign(cartItems, addInfoProduct);
        localStorage.setItem("productsInCart", JSON.stringify(returnTarget));
      } else {
        let returnTarget = addInfoProduct;
        localStorage.setItem("productsInCart", JSON.stringify(returnTarget));
      }
    }

    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
      productNumbers = JSON.parse(productNumbers);
      localStorage.setItem(
        "cartNumbers",
        JSON.stringify(inputCurrentProduct.valueAsNumber + productNumbers)
      );
    } else {
      localStorage.setItem(
        "cartNumbers",
        JSON.stringify(inputCurrentProduct.valueAsNumber)
      );
    }

    let cartCost = localStorage.getItem("totalCost");

    if (cartCost) {
      localStorage.setItem(
        "totalCost",
        JSON.stringify(
          parseInt(currentPriceNumberValue) *
            inputCurrentProduct.valueAsNumber +
            parseInt(cartCost)
        )
      );
    } else {
      localStorage.setItem(
        "totalCost",
        JSON.stringify(
          parseInt(currentPriceNumberValue) * inputCurrentProduct.valueAsNumber
        )
      );
    }
    location.reload();
  });

  yellowColourBtn.addEventListener("click", () => {
    let currentProductInCart = localStorage.getItem("currentProduct");
    currentProductInCart = JSON.parse(currentProductInCart);
    console.log(currentProductInCart.color);

    currentProductInCart.color = "yellow";

    currentProductInCart = localStorage.setItem(
      "currentProduct",
      JSON.stringify(currentProductInCart)
    );
  });

  blackColourBtn.addEventListener("click", () => {
    let currentProductInCart = localStorage.getItem("currentProduct");
    currentProductInCart = JSON.parse(currentProductInCart);

    currentProductInCart.color = "black";

    currentProductInCart = localStorage.setItem(
      "currentProduct",
      JSON.stringify(currentProductInCart)
    );
  });
}

//-------------------------CHANGE-MAIN-IMG-ON-CURRENT-PRODUCT-PAGE-----------------

const mainImg = document.querySelector(".main-img");
const smallImg = document.querySelectorAll(".small-img");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
    mainImg.setAttribute("src", smallImg[i].src);
  });
}

//--------------------------DELETE-ITEM-ON-CART-PAGE--------
const deleteItemBtns = document.querySelectorAll("#remove");

for (let i = 0; i < deleteItemBtns.length; i++) {
  deleteItemBtns[i].addEventListener("click", () => {
    let cartItems = localStorage.getItem("productsInCart");
    let productNumbers = localStorage.getItem("cartNumbers");
    let cartCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);
    productNumbers = JSON.parse(productNumbers);
    cartCost = JSON.parse(cartCost);

    localStorage.setItem(
      "cartNumbers",
      productNumbers - cartItems[Object.keys(cartItems)[i]].inCart
    );
    localStorage.setItem(
      "totalCost",
      cartCost -
        cartItems[Object.keys(cartItems)[i]].price *
          cartItems[Object.keys(cartItems)[i]].inCart
    );

    delete cartItems[Object.keys(cartItems)[i]];

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCart();
    location.reload();
  });
}

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

//----------------------------ADD-EVENT-LISTENERS----------------
burger.addEventListener("click", menu);
userBtn.addEventListener("click", loginPopup);
submitPopup.addEventListener("submit", submitForm);
btnColeForm.addEventListener("click", close);
btnBrowseCat.addEventListener("click", categoriesList);
changeForm.addEventListener("click", changeFormSign);
