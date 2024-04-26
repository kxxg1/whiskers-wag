// Define an array to hold the cart items
const clearBtn = document.getElementById('clear-cart')
const cartContainer = document.querySelector('#cart-container')

// just stole this from index, will make into modules if I have time.
function updateCartTotal() {
  // grab cart every time, just in case.
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // if there is no cart, stop there. if there is, calc the total and put it in the p 
  if (!cart) {
    console.log("No current cart")
    return
  } else {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Cart Total:", total);
    const cartTotal = document.getElementById('cart-total')
    cartTotal.innerHTML = `$ ${total}`
  }
}


const updateItemQuantity = (itemId, newQuantity) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === itemId);
  if (index !== -1) {
    if (newQuantity > 0) {
      cart[index].quantity = newQuantity;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    createCartItems();
    updateCartTotal()
  }
}

const clearCart = () => {
  localStorage.removeItem('cart')
  cartContainer.innerHTML = ''
  updateCartTotal()
}

const createCartItems = () => {
  // re-get the cart every time, just in case anything has changed
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // reset the container, in the future (i guess with React), we can make it so it doesn't have to clear it entirely, simply add the one we mentioned)
  cartContainer.innerHTML = ''

  cart.forEach(item => {
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')

    const itemValues = `
    <div class="image-container">
        <img class="cart-img" src="${item.image}" alt="Pet item">
      </div>
      <div class="cart-container">
        <div class="cart">
          <div class="cart-left">
            <h3>${item.name}</h3>
          </div>
          <div class="cart-right">
          </div>
        </div>
        <div class="cart">
          <div class="cart-left">
            <button class="cart-button" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">
              -
            </button>
            <p>${item.quantity}</p>
            <button class="cart-button" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">
              +
            </button>
          </div>
          <div class="content-right">
            <p>Total for all your ${item.name} is $ ${item.price * item.quantity}</p>
          </div>
          <div class="cart-right">
              <button class="cart-button" onclick="updateItemQuantity(${item.id}, 0)"> 
                <img src="./images/bin.png" alt="logo" width="20" height="20"> 
              </button>
          </div>
        </div>
      </div>
    `

    cartItem.innerHTML = itemValues
    cartContainer.appendChild(cartItem)


  })






}
// localStorage.removeItem('cart')

createCartItems()
updateCartTotal()

clearBtn.addEventListener('click', clearCart)


const time = () => {
  let currentTime = new Date()

  // the toLocaleTimeString formats the time nicely, into 00:00:00 style, can edit later on for if we don't want the seconds.
  let localTime = currentTime.toLocaleTimeString('en-AU')

  //then pin to doc, assuming we just have a section or something that makes us a clock
  document.getElementById('clock').innerHTML = localTime

}

setInterval(time, 1000)