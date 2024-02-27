// JavaScript code for the slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 1 second
}


// Coffee shop content
var i = 0;
var txt = 'Work, Reimagined';
var speed = 50;

function typeWriterHeadline() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
                setTimeout(typeWriterHeadline, headlineSpeed);
    } else {
                // Call the quote typewriter after the headline is finished
        }
        window.onload = function() {
typeWriter();
};

function typeWriterQuote() {
    var i = 0;
    var txt = 'I feel like I get a little stir crazy when I\'m stuck in an apartment all day';
    var speed = 75;
    var pauseTime = 5000;

    function typeWriter() {
        if (quoteIndex < quoteTxt.length) {
        document.getElementById("quoteText").innerHTML += quoteTxt.charAt(quoteIndex); // Corrected the ID here
        quoteIndex++;
        setTimeout(typeWriter, quoteSpeed);
    } else {
        setTimeout(resetTypewriter, pauseTime);
    }
}
    function resetTypewriter() {
        quoteIndex = 0;
        document.getElementById("quoteText").innerHTML = ''; // Corrected the ID here
        typeWriter();
    }
    typeWriter();
};

window.onload = function() {
        typeWriterHeadline();
    };