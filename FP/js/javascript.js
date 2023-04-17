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

/*
// Update the image
const productImage = document.querySelector('#image-on-project-detail-page');
if (productImage != null){
      productImage.src = 'asset/art/' + chosenProduct.imageFile;
      productImage.alt = chosenProduct + ' Cinnamon Roll'
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
}//
*/