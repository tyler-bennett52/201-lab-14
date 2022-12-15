/* global Product, Cart */
'use strict';
const selectElement = document.getElementById('items');
const qtyElement = document.querySelector('#quantity');
const itemCount = document.querySelector('#itemCount');
const cartContents = document.querySelector('#cartContents');

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  for (let item of state.allProducts) {
    let newOption = document.createElement('option');
    newOption.innerText = item.name;
    selectElement.appendChild(newOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let itemSelection = selectElement.value;
  // TODO: get the quantity
  let qtySelection = qtyElement.value;
  // TODO: using those, add one item to the Cart
  state.cart.addItem(itemSelection, qtySelection);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  itemCount.innerText = ` - ${state.cart.items.length} items in cart`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let itemSelection = selectElement.value;
  let qtySelection = qtyElement.value;
  // TODO: Add a new element to the cartContents div with that information
  let newCartContent = document.createElement('div');
  newCartContent.classList.add('cart-card')
  newCartContent.innerText = `${qtySelection} ${itemSelection}`;
  cartContents.appendChild(newCartContent);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


const header = document.querySelector('.col-1');
const imgHolder = document.createElement('div');
header.appendChild(imgHolder);
imgHolder.classList.add('img-holder');
for (let product of state.allProducts) {
  let productImg = document.createElement('img');
  productImg.classList.add('product-img');
  productImg.src = product.filePath;
  imgHolder.appendChild(productImg);
}
