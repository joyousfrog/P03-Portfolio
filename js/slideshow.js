//SLIDESHOW TUTORIAL: https://www.w3schools.com/howto/howto_js_slideshow.asp
// ADAPTED CODE FROM P02, made major changes and fixed how auto progression works

let slideIndex = 1;
var timeoutHolder;
showSlides(slideIndex);
autoSlide(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let captions = document.getElementsByClassName("slide_caption");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    captions[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}   

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  captions[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot_active";

  clearTimeout(timeoutHolder);
  timeoutHolder = window.setTimeout(function() {plusSlides(1)}, 4000);
}

