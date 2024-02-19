// JavaScript code to handle the image click event
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Hide all images
            images.forEach(function(img) {
                img.style.display = 'none';
            });
            // Show the clicked image
            this.style.display = 'block';
        });
    });
});

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
