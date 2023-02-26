// data base that contains all the roll information
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


//Utilize the URL Parameters to generate different pages base on user's product selection
//URL Parameters starts here

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenProduct = params.get('roll')

// Update the header text
const headerElement = document.querySelector('#product-header-text');
if (headerElement != null){
  if (chosenProduct == null) {
      headerElement.innerText = 'Original Cinnamon Roll'
  }
  else{
      headerElement.innerText = chosenProduct + ' Cinnamon Roll'
  }
}

// Update the image
const productImage = document.querySelector('#image-on-product-detail-page');
if (productImage != null){
  if (chosenProduct === null){
      productImage.src = 'asset/products/original-cinnamon-roll.jpg'
      productImage.alt = 'Original Cinnamon Roll'
  } 
  else{
      productImage.src = 'asset/products/' + rolls[chosenProduct].imageFile;
      productImage.alt = chosenProduct + ' Cinnamon Roll'
  }
}

// Update the default price
const productPrice = document.querySelector('#total-price');
if (productPrice != null){
  if (chosenProduct === null){
      productPrice.innerText = "$ 2.49"
  }
  else{
      productPrice.innerText = "$ " + rolls[chosenProduct].basePrice
  }
}



// implement glazingPrices object
const glazingPrices = {
    "Keep original": 0,
    "Suger milk":0,
    "Vanilla milk":0.5,
    "Double chocolate":1.5,
};

// select the HTML part (the dropdown menu) that needs to be motified
const glazingSelect = document.querySelector("select#glazing-options");

if (glazingSelect != null){
  for (const [glazing, price] of Object.entries(glazingPrices)) {
   const option = document.createElement("option");
   // change option's text and value here
   option.innerText =glazing
   option.value = price
   glazingSelect.appendChild(option); 
  }
}

// implement packSizePrices object
const packSizePrices = {
    "1": 1,
    "3":3,
    "6":5,
    "12":10,
};

// select the HTML part (the dropdown menu) that needs to be motified
const packSizeSelect = document.querySelector("select#packsize-options");

if (packSizeSelect != null){
  for (const [packSize, price] of Object.entries(packSizePrices)) {
   const option = document.createElement("option");
   option.innerText =packSize
   option.value = price
   packSizeSelect.appendChild(option); 
  }
}

//changing price base on glazing and pack size start here. 

// declare the global variation: priceChangeGlazing & priceChangePackSize
// those are the default value before changing the drop-down selection
// priceChangeGlazing and priceChangePackSize are used to caculate price
// chosenGlazing and chosenPackSize are used to identify the dropdown menu key in the Add to Cart function
var priceChangeGlazing = 0
var priceChangePackSize = 1
var chosenGlazing = "Keep original"
var chosenPackSize = "1" 

function glazingChange(element) {
    // change global variation priceChangeGlazing and chosenGlazing based on the drop-down selection
    priceChangeGlazing = element.value
    updatePrice(priceChangeGlazing,priceChangePackSize)
    // access the key of the glazing selection
    chosenGlazing = Object.entries(glazingPrices)[element.selectedIndex][0]
}

function packSizeChange(element){
    priceChangePackSize = element.value
    updatePrice(priceChangeGlazing,priceChangePackSize)
    // access the key of the packsize selection
    chosenPackSize = Object.entries(packSizePrices)[element.selectedIndex][0]
}

function updatePrice(priceChangeGlazing,priceChangePackSize){
    // set up product base price
    if (chosenProduct === null){
        unitPrice = 2.49
    } 
    else{
        unitPrice = rolls[chosenProduct].basePrice
    }
    let priceText =  document.querySelector('#total-price')
    totalPrice = (unitPrice + Number(priceChangeGlazing))*Number(priceChangePackSize)
    // get only two digits
    totalPrice = totalPrice.toFixed(2)
    priceText.innerText = "$ "+ totalPrice
}



// "Add to Cart" function starts here

// create the roll class
class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}


// TO SOLVE: export, import function not working
/*

export the useful module
export {chosenProduct, Roll, rolls, chosenGlazing, chosenPackSize};

*/

// create the cart array
const cart = []

// now the function could not add items to the cart page
// this problem may be solved in the next assignment
function addToCart(rollType, rollGlazing, packSize, basePrice){
    //console.log("addToCart() is running")
    const product = new Roll(rollType, rollGlazing, packSize, basePrice)
    cart.push(product)
    console.log(cart)

    

    // FOR NEXT ASSIGNMENT: these code is related to local storage, which may be helpful for the next assignment.

    /*
    
    const cartString = localStorage.getItem('storedItem');
    const cartArray = JSON.parse(cartString)
    cartArray.push(product)
    const cartStringNew = JSON.stringify(cartArray)
    localStorage.setItem('storedItem',cartStringNew)
    //console.log(cart)
    //saveToLocalStorage()
    
    */
}

// let the addToCart() function be triggered by clicking on the btnAddtoCart
const btnAddToCart = document.querySelector('.add-to-cart-btn');
if (btnAddToCart != null){
  const rollType = chosenProduct
  const basePrice =  rolls[chosenProduct].basePrice
  rollGlazing = chosenGlazing
  packSize = chosenPackSize
  btnAddToCart.addEventListener('click', () =>  {addToCart(rollType, rollGlazing, packSize, basePrice)})
}



// for the cart page starts here

// set the default cart
const roll1 = addToCart('Original','Suger milk','1',rolls.Original.basePrice)
const roll2 = addToCart('Walnut','Vanilla milk','12',rolls.Walnut.basePrice)
const roll3 = addToCart('Raisin','Suger milk','3',rolls.Raisin.basePrice)
const roll4 = addToCart('Apple','Keep original','3',rolls.Apple.basePrice)


// create a global variable to store the totalPrice of each item
var totalPrices = 0

function createCartItem(item){
    const template = document.querySelector('#items-to-be-paid-template');
    if (template != null){
        const clone = template.content.cloneNode(true);
    item.element = clone.querySelector('.items-to-be-paid')

    const itemsToBePaidListElement = document.querySelector('#item-to-be-paid-list');
    itemsToBePaidListElement.append(item.element)
    updateElement(item)
    // let the removeCartItem(item) function be trigered only if we pressed the remove button
    const btnRemove = item.element.querySelector('.remove');
    btnRemove.addEventListener('click', () =>  {removeCartItem(item)})
    }
}

function calculatePrice(item){
    const glazingPrice = glazingPrices[item.glazing]
    const packSizePrice = packSizePrices[item.size]
    const totalPrice = ((item.basePrice + Number(glazingPrice))*Number(packSizePrice)).toFixed(2)
    return totalPrice

}

function updateElement(item) {
    const itemImage = item.element.querySelector('.items-to-be-paid-image-src');
    const itemName = item.element.querySelector('.items-to-be-paid-name');
    const itemGlazing = item.element.querySelector('.items-to-be-paid-glazing') ;
    const itemPackSize = item.element.querySelector('.items-to-be-paid-pack-size');
    const itemPrice = item.element.querySelector('.price');

    itemName.innerText = item.type + ' Cinnamon Roll';
    itemImage.src = 'asset/products/' + rolls[item.type].imageFile;
    itemGlazing.innerText = 'Glazing: ' + item.glazing;
    itemPackSize.innerText = 'Pack Size: ' + item.size;

    totalPrice = calculatePrice(item)
    itemPrice.innerText = '$ '+ totalPrice
    totalPrices = Number(totalPrices) + Number(totalPrice) 
    updateTotalPrices()
}

for (const item of cart){
    createCartItem(item)
}


function updateTotalPrices(){
    totalPricesText = document.querySelector('#total-prices')
    totalPricesText.innerText = '$ ' + totalPrices
}

function removeCartItem(item){
    // remove the irem from cart
    console.log("item is ",item)
    console.log(cart.indexOf(item))
    //TO SOlVE: a better way to delete item
    delete cart[cart.indexOf(item)]
    // this is not working for now
    //deleteItme = cart.splice(cart.indexOf(item),0)

    //update the totalPrices

    totalPrice = calculatePrice(item)
    totalPrices = (Number(totalPrices) - Number(totalPrice)).toFixed(2)
    updateTotalPrices()

    // remove the item from DOM
    item.element.remove()
}



// FOR NEXT ASSIGNMENT: these code is related to local storage, which may be helpful for the next assignment.

/*

// save to local storage
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedItem',cartString);
}

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedItem');
    const cartArray = JSON.parse(cartString)
    for (const item of cartArray){
        createCartItem(item)
    }
}

if (localStorage.getItem('storedItem')==null) {
    saveToLocalStorage()
}

if (localStorage.getItem('storedItem')!=null) {
    //saveToLocalStorage()
    retrieveFromLocalStorage()
}

*/
