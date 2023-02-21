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
if (chosenProduct == null){
    headerElement.innerText = 'Original Cinnamon Roll'
}
// edge case, we don't want the hypon shows in the title
else if(chosenProduct == "Double-Chocolate"){
    headerElement.innerText = 'Double Chocolate Cinnamon Roll'
}
else{
    headerElement.innerText = chosenProduct + ' Cinnamon Roll'
}

// Update the image
const productImage = document.querySelector('#image-on-product-detail-page');
if (chosenProduct == null){
    productImage.src = 'asset/products/original-cinnamon-roll.jpg'
    productImage.alt = 'Original Cinnamon Roll'
} 
else{
    productImage.src = 'asset/products/' + rolls[chosenProduct].imageFile;
    productImage.alt = chosenProduct + ' Cinnamon Roll'
}

// Update the default price
const productPrice = document.querySelector('#total-price');
if (chosenProduct === null){
    productPrice.innerText = "$ 2.49"
}
else{
    productPrice.innerText = "$ " + rolls[chosenProduct].basePrice
}



// implement glazingPrices object
const glazingPrices = {
    "Keep original": 0,
    //must assign a different value to "Suger milk" in order to distinguish it from "Keep original"
    "Suger milk":"0.0",
    "Vanilla milk":0.5,
    "Double chocolate":1.5,
};

// select the HTML part (the dropdown menu) that needs to be motified
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
 const option = document.createElement("option");
 // change option's text and value here
 option.innerText =glazing
 option.value = price
 glazingSelect.appendChild(option); 
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

for (const [packSize, price] of Object.entries(packSizePrices)) {
 const option = document.createElement("option");
 option.innerText =packSize
 option.value = price
 packSizeSelect.appendChild(option); 
}

//changing price base on glazing and pack size start here. 

// declare the global variation: priceChangeGlazing & priceChangePackSize
// those are the default value before changing the drop-down selection
// priceChangeGlazing and priceChangePackSize are used to caculate price
// chosenGlazing and chosenPackSize are used to identify the dropdown menu key in the Add to Cart function
var priceChangeGlazing = 0
var priceChangePackSize = 1
var chosenGlazing = "Keep Original"
var chosenPackSize = "1" 

function glazingChange(element) {
    // change global variation priceChangeGlazing and chosenGlazing based on the drop-down selection
    priceChangeGlazing = element.value
    updatePrice(priceChangeGlazing,priceChangePackSize)
    if (element.value === "0"){
        chosenGlazing = "Keep Original"
    }
    else if(element.value === "0.0"){
        chosenGlazing = "Suger Milk"
    }
    else if(element.value === "0.5"){
        chosenGlazing = "Vanilla Milk"
    }
    else{
        chosenGlazing = "Double chocolate"
    }
    //console.log("chosenGlazing is " + chosenGlazing)
}

function packSizeChange(element){
    priceChangePackSize = element.value
    updatePrice(priceChangeGlazing,priceChangePackSize)
    //if and else if identify the two edge cases that chosen PackSize are not equal to priceChangePackSize
    if (element.value === "5"){
        chosenPackSize = "6"
    }
    else if(element.value === "10"){
        chosenPackSize = "12"
    }
    else{
        chosenPackSize = priceChangePackSize
    }
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
    }
}

// create the cart array
const cart = []

function addToCart(){
    const rollType = chosenProduct
    const basePrice =  rolls[chosenProduct].basePrice
    rollGlazing = chosenGlazing
    packSize = chosenPackSize
    const product = new Roll(rollType, rollGlazing, packSize, basePrice)
    cart.push(product)
    console.log(cart)
}

// let the addToCart() function be triggered by clicking on the btnAddtoCart
const btnAddToCart = document.querySelector('.add-to-cart-btn');
btnAddToCart.addEventListener('click', () =>  {addToCart()})

