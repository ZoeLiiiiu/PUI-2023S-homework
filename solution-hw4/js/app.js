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
//console.log('debug starting')

// Update the header text
// Did't use  headerElement.innerText = chosenProduct because they are of different style
// chosenProduct is "original-cinnamon-roll", while I want the headerElement.innerText to be "Original Cinnamon Roll"
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
    productPrice.innerText = rolls[chosenProduct].basePrice
}



// implement glazingPrices object
//console.log('the code running')
const glazingPrices = {
    "Keep original": 0,
    "Suger milk":0,
    "Vanilla milk":0.5,
    "Double chocolate":1.5,
};

// select the HTML part (the dropdown menu) that needs to be motified
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
 const option = document.createElement("option");
 // change option's text and value here
 option.innerText =glazing
 option.key = glazing
 option.value = price
 console.log("create a new element, the key is "+option.key)
 //console.log("create a new element, the innerText is "+option.innerText)
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
 // change option's text and value here
 option.innerText =packSize
 option.key = packSize
 option.value = price
 console.log("create a new element, the key is "+option.key)
 //console.log("create a new element, the innerText is "+option.innerText)
 packSizeSelect.appendChild(option); 
}

//changing price base on glazing and pack size start here. 

// declare the global variation: priceChangeGlazing & priceChangePackSize
// those are the default value before changing the drop-down selection
var priceChangeGlazing = 0
var priceChangePackSize = 1
var chosenGlazing = "Keep Original"
var chosenPackSize = "1" 

function glazingChange(element) {
    // change global variation priceChangeGlazing based on the drop-down selection
    console.log("change glazing to " + element.value)
    console.log("change glazing value to " + element.value)
    priceChangeGlazing = element.value
    chosenGlazing = element.key
    //console.log("the element is "+ element)
    updatePrice(priceChangeGlazing,priceChangePackSize)
}

function packSizeChange(element){
    // change global variation priceChangeGlazing based on the drop-down selection
    //console.log("change packSize to " + element.key)
    //console.log("the element is "+ element)
    priceChangePackSize = element.value
    chosenPackSize = element.key
    updatePrice(priceChangeGlazing,priceChangePackSize)
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
    console.log("onclick element is triggered")
    const rollType = chosenProduct
    var rollGlazing = chosenGlazing
    var packSize = chosenPackSize
    const basePrice =  rolls[chosenProduct].basePrice
    const product = new Roll(rollType, rollGlazing, packSize, basePrice)
    cart.push(product)
    console.log(cart)
}

const btnAddToCart = document.querySelector('.add-to-cart-btn');
btnAddToCart.addEventListener('click', () =>  {addToCart()})

