const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const chosenProduct = params.get('product')

/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
const headerElement = document.querySelector('#product-header-text');
if (chosenProduct == null){
    headerElement.innerText = "Original Cinnamon Roll"
} 
else if(chosenProduct == "original-cinnamon-roll"){
    headerElement.innerText = "Original Cinnamon Roll"
}
else if(chosenProduct == "apple-cinnamon-roll"){
    headerElement.innerText = "Apple Cinnamon Roll"
}
else if(chosenProduct == "raisin-cinnamon-roll"){
    headerElement.innerText = "Raisin Cinnamon Roll"
}
else if(chosenProduct == "walnut-cinnamon-roll"){
    headerElement.innerText = "Walnut Cinnamon Roll"
}
else if(chosenProduct == "double-chocolate-cinnamon-roll"){
    headerElement.innerText = "Double Chocolate Cinnamon Roll"
}
else if(chosenProduct == "strawberry-cinnamon-roll"){
    headerElement.innerText = "Strawberry Cinnamon Roll"
}
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
if (chosenProduct == null){
    productPrice.innerText = "$ 2.49"
} 
else if(chosenProduct == "original-cinnamon-roll"){
    productPrice.innerText = "$ 2.49"
}
else if(chosenProduct == "apple-cinnamon-roll"){
    productPrice.innerText = "$ 3.49"
}
else if(chosenProduct == "raisin-cinnamon-roll"){
    productPrice.innerText = "$ 2.99"
}
else if(chosenProduct == "walnut-cinnamon-roll"){
    productPrice.innerText = "$ 3.49"
}
else if(chosenProduct == "double-chocolate-cinnamon-roll"){
    productPrice.innerText = "$ 3.99"
}
else if(chosenProduct == "strawberry-cinnamon-roll"){
    productPrice.innerText = "$ 3.99"
}
else{
    productPrice.innerText = chosenProduct
}





}
// detect the pack size
function glazingChange(element) {
    if (chosenProduct == null){
        unitPrice = 2.49
    } 
    else if(chosenProduct == "original-cinnamon-roll"){
        unitPrice = 2.49
    }
    else if(chosenProduct == "apple-cinnamon-roll"){
        unitPrice = 3.49
    }
    else if(chosenProduct == "raisin-cinnamon-roll"){
        unitPrice = 2.99
    }
    else if(chosenProduct == "walnut-cinnamon-roll"){
        unitPrice = 3.49
    }
    else if(chosenProduct == "double-chocolate-cinnamon-roll"){
        unitPrice = 3.99
    }
    else if(chosenProduct == "strawberry-cinnamon-roll"){
        unitPrice = 3.99
    }
    else{
        unitPrice = 2.49
    }
    const priceChange = element.value
    let priceText =  document.querySelector('#total-price')
    totalPrice = unitPrice + Number(priceChange)
    console.log("total price is" + totalPrice)
    priceText.innerText = "$ "+ totalPrice
}

//function 

// TO DO: update when caculating the total price
//Update the price
//const productPrice = document.querySelector('#image-on-product-detail-page');
//"price-to-be-paid"