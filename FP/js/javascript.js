// should build a class that contain all the projects, the element properties are the project category and project alt text
const projects = {
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

const chosenProduct = params.get('project')

// Update the header text
const headerElement = document.querySelector('#project-title');
if (headerElement != null){
    headerElement.innerText = chosenProduct
}


// Update the image
const productImage = document.querySelector('#project-detail-image');
if (productImage != null){
      productImage.src = 'asset/' + chosenProduct + '.jpg';
      productImage.alt = chosenProduct
  }

  /*
// Update the text
const productPrice = document.querySelector('#total-price');
if (productPrice != null){
  if (chosenProduct === null){
      productPrice.innerText = "$ 2.49"
  }
  else{
      productPrice.innerText = "$ " + rolls[chosenProduct].basePrice
  }
}//
*/