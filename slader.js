var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
showSlides(slideIndex = n);
}
function showSlides(n){
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
if(n > slides.length){
slideIndex = 1;
}
if(n < 1){
slideIndex = slides.length;
}
for(i=0; i<slides.length; i++){
slides[i].style.display = "none";
}
for(var i=0; i < dots.length; i++){
dots[i].className = dots[i].className.replace("active","");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
var i = 1; 
setInterval(function(){ 
currentSlide(i) 
i++; 
if(i == 4) 
{ 
i = 1; 
} 
},5000)