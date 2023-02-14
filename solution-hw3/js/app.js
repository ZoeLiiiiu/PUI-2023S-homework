//Utilize the URL Parameters to generate different pages base on user's product selection
//URL Parameters starts here

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenProduct = params.get('product')

// Update the header text
// Did't use  headerElement.innerText = chosenProduct because they are of different style
// chosenProduct is "original-cinnamon-roll", while I want the headerElement.innerText to be "Original Cinnamon Roll"
const headerElement = document.querySelector('#product-header-text');
if (chosenProduct === null){
    headerElement.innerText = "Original Cinnamon Roll"
} 
else if(chosenProduct === "original-cinnamon-roll"){
    headerElement.innerText = "Original Cinnamon Roll"
}
else if(chosenProduct === "apple-cinnamon-roll"){
    headerElement.innerText = "Apple Cinnamon Roll"
}
else if(chosenProduct === "raisin-cinnamon-roll"){
    headerElement.innerText = "Raisin Cinnamon Roll"
}
else if(chosenProduct === "walnut-cinnamon-roll"){
    headerElement.innerText = "Walnut Cinnamon Roll"
}
else if(chosenProduct === "double-chocolate-cinnamon-roll"){
    headerElement.innerText = "Double Chocolate Cinnamon Roll"
}
else if(chosenProduct === "strawberry-cinnamon-roll"){
    headerElement.innerText = "Strawberry Cinnamon Roll"
}
// do a else statement here for the sick of letting the code more rigorous
else{
    headerElement.innerText = chosenProduct
}

// Update the image
const productImage = document.querySelector('#image-on-product-detail-page');
if (chosenProduct == null){
    productImage.src = 'asset/products/original-cinnamon-roll.jpg'
    productImage.alt = "original-cinnamon-roll"
} else{
    productImage.src = 'asset/products/' + chosenProduct + '.jpg';
    productImage.alt = chosenProduct

// Update the default price
const productPrice = document.querySelector('#total-price');
if (chosenProduct === null){
    productPrice.innerText = "$ 2.49"
} 
else if(chosenProduct === "original-cinnamon-roll"){
    productPrice.innerText = "$ 2.49"
}
else if(chosenProduct === "apple-cinnamon-roll"){
    productPrice.innerText = "$ 3.49"
}
else if(chosenProduct === "raisin-cinnamon-roll"){
    productPrice.innerText = "$ 2.99"
}
else if(chosenProduct === "walnut-cinnamon-roll"){
    productPrice.innerText = "$ 3.49"
}
else if(chosenProduct === "double-chocolate-cinnamon-roll"){
    productPrice.innerText = "$ 3.99"
}
else if(chosenProduct === "strawberry-cinnamon-roll"){
    productPrice.innerText = "$ 3.99"
}
// do a else statement here for the sick of letting the code more rigorous
else{
    productPrice.innerText = "$ 2.49"
}
}


// new method 
// implement glazingPrices object

const glazingPrices = {
    "Keep original": 0,
    "Suger milk":0,
    "Vanilla milk":0.5,
    "Double chocolate":1.5,
};

const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
 const option = document.createElement("option");
 // change option's text and value here
 option.innerText =glazing
 console.log(typeof price)
 option.value = Number(price)
 console.log(typeof option.value)
 glazingSelect.appendChild(option); 
}

const packSizePrices = {
    "1": 1,
    "3":3,
    "6":5,
    "12":10,
};

console.log("empty line here")
const packSizeSelect = document.querySelector("select#packsize-options");

for (const [packSize, price] of Object.entries(packSizePrices)) {
 const option = document.createElement("option");
 // change option's text and value here
 option.innerText =packSize
 console.log(typeof price)
 option.value = price
 console.log(typeof option.value)
 packSizeSelect.appendChild(option); 
}

//changing price base on glazing and pack size start here. 
//set default value for glazing price and pack size

// declare the global variation: priceChangeGlazing & priceChangePackSize
// those are the default value before changing the drop-down selection
var priceChangeGlazing = 0
var priceChangePackSize = 1

function glazingChange(element) {
    // change global variation priceChangeGlazing based on the drop-down selection
    priceChangeGlazing = element.value
    console.log("the type of priceChangeGlazing is "+ typeof priceChangeGlazing)
    updatePrice(priceChangeGlazing,priceChangePackSize)
}

function packSizeChange(element){
    // change global variation priceChangeGlazing based on the drop-down selection
    priceChangePackSize = element.value
    console.log("the type of priceChangePackSize is "+ typeof priceChangePackSize)
    updatePrice(priceChangeGlazing,priceChangePackSize)
}


function updatePrice(priceChangeGlazing,priceChangePackSize){
    if (chosenProduct === null){
        unitPrice = 2.49
    } 
    else if(chosenProduct === "original-cinnamon-roll"){
        unitPrice = 2.49
    }
    else if(chosenProduct === "apple-cinnamon-roll"){
        unitPrice = 3.49
    }
    else if(chosenProduct === "raisin-cinnamon-roll"){
        unitPrice = 2.99
    }
    else if(chosenProduct === "walnut-cinnamon-roll"){
        unitPrice = 3.49
    }
    else if(chosenProduct === "double-chocolate-cinnamon-roll"){
        unitPrice = 3.99
    }
    else if(chosenProduct === "strawberry-cinnamon-roll"){
        unitPrice = 3.99
    }
    // do a else statement here for the sick of letting the code more rigorous
    else{
        unitPrice = 2.49
    }
    let priceText =  document.querySelector('#total-price')
    console.log(priceChangeGlazing)
    console.log(typeof priceChangeGlazing)
    totalPrice = (unitPrice + Number(priceChangeGlazing))*Number(priceChangePackSize)
    // get only two digits
    totalPrice = totalPrice.toFixed(2)
    priceText.innerText = "$ "+ totalPrice
}






