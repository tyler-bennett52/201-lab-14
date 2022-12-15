/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let cartItems = table.querySelectorAll('tbody > tr');
  cartItems.forEach(e => e.remove());
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = table.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  let storedData = localStorage.getItem('cart');
  let parsedData = JSON.parse(storedData);
  for(let i = 0; i < parsedData.length; i++){
    // TODO: Create a TR
    let rowElem = document.createElement('tr');
    tableBody.appendChild(rowElem);
    // TODO: Create a TD for the delete link, quantity,  and the item
    let xElem = document.createElement('td');
    xElem.innerText = 'X';
    rowElem.appendChild(xElem);
    let quantElem = document.createElement('td');
    quantElem.innerText = `${parsedData[i].quantity}`;
    rowElem.appendChild(quantElem);
    let tdElem = document.createElement('td');
    tdElem.innerText = `${parsedData[i].product}`;
    rowElem.appendChild(tdElem);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
