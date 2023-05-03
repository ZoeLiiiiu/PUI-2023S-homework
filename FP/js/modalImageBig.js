// work for a special image where the width is far bigger than the height

// Get the modal
var modal2 = document.getElementById("myModalBig");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg02 = document.getElementById("imgBig");
var captionText2 = document.getElementById("captionBig");

//get all the applicable images on the page
var images = document.getElementsByClassName('myImagesBig');

//get the cross
var close2 = document.getElementById("closeBig");

//loop through all the images to see which one is on click
for (var i = 0; i < images.length; i++) {
      var img = images[i];
      // and attach our click listener for this image.
      img.onclick = function(evt) {
        modal2.style.display = "block";
        modalImg02.src = this.src;
        captionText2.innerHTML = this.alt;
      }
    }
    

// When the user clicks on <span> (x), close the modal
close2.onclick = function() { 
    modal2.style.display = "none";
  }