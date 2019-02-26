var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(((Math.random() * 10)+1) * ((Math.random() * 10)+1))
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if(cart.length === 1){
    var bar = cart[0]
    var str = `In your cart, you have ${bar[0]} at ${bar[1]}.`
    return str
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
