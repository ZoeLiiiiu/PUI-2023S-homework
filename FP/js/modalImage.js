// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg01 = document.getElementById("img01");
var modalImg02 = document.getElementById("img02");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var img1 = document.getElementById("experiential");
var img2 = document.getElementById("walk-through");
var img3 = document.getElementById("plan-level-1");
var img4 = document.getElementById("plan-level-2");
var img5 = document.getElementById("axon-1");
var img6 = document.getElementById("axon-2");
var img7 = document.getElementById("conceptual-diagram");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");


img1.onclick = function(){
  modal.style.display = "block"; 
  modalImg01.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg01.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block"; 
    modalImg01.src = this.src;
    captionText.innerHTML = this.alt;
}
  
img4.onclick = function(){
      modal.style.display = "block";
      modalImg01.src = this.src;
      captionText.innerHTML = this.alt;
}

img5.onclick = function(){
    modal.style.display = "block"; 
    modalImg01.src = this.src;
    captionText.innerHTML = this.alt;
}
  
img6.onclick = function(){
      modal.style.display = "block";
      modalImg01.src = this.src;
      captionText.innerHTML = this.alt;
}

img7.onclick = function(){
    modal2.style.display = "block";
    modalImg02.src = this.src;
    captionText2.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close1.onclick = function() { 
  modal.style.display = "none";
}

close2.onclick = function() { 
    modal2.style.display = "none";
  }