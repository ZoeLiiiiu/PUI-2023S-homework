//Utilize the URL Parameters to generate different pages base on user's product selection
//URL Parameters starts here

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenProduct = params.get('project')

// Update the header text
const headerElement = document.querySelector('#product-header-text');
if (headerElement != null){
  if (chosenProduct == null) {
      headerElement.innerText = 'Original Cinnamon Roll'
  }
  else{
      headerElement.innerText = chosenProduct
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

// Update the text
const productPrice = document.querySelector('#total-price');
if (productPrice != null){
  if (chosenProduct === null){
      productPrice.innerText = "$ 2.49"
  }
  else{
      productPrice.innerText = "$ " + rolls[chosenProduct].basePrice
  }
}