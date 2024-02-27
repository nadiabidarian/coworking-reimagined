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

// Define an array of hotspot coordinates
var hotspots = [
    { top: '20%', left: '20%', width: '20%', height: '20%', image: '2.jpg' },
    { top: '50%', left: '50%', width: '20%', height: '20%', image: '3.jpg' }
    // Add more hotspot objects as needed
];

var mainImage = '1.jpg'; // Main background image

// Set initial background image
document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";

// Variable to track current background image
var currentImage = mainImage;

// Add event listeners to hotspots
hotspots.forEach(function(hotspot) {
    var hotspotElement = document.createElement('div');
    hotspotElement.className = 'hotspot';
    hotspotElement.style.position = 'absolute';
    hotspotElement.style.top = hotspot.top;
    hotspotElement.style.left = hotspot.left;
    hotspotElement.style.width = hotspot.width;
    hotspotElement.style.height = hotspot.height;
    hotspotElement.style.cursor = 'pointer';
    hotspotElement.addEventListener('click', function() {
        if (currentImage !== mainImage) {
            return; // Do nothing if an alternate image is already shown
        }
        document.querySelector('.container').style.backgroundImage = "url('" + hotspot.image + "')";
        document.getElementById('returnButton').style.display = 'block';
        currentImage = hotspot.image;
    });
    document.querySelector('.container').appendChild(hotspotElement);
});

// Add event listener to the return button
document.getElementById('returnButton').addEventListener('click', function() {
    document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";
    document.getElementById('returnButton').style.display = 'none';
    currentImage = mainImage;
});



var i = 0;
var txt = 'Work, Reimagined';
var speed = 50; // Speed of typing

function typeWriterHeadline() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterHeadline, speed); // Use `speed` variable here
    } else {
        // Call the quote typewriter after the headline is finished
        // You might want to call another function here or just leave it empty if there's nothing else to do
    }
}

// Fix the window.onload assignment to ensure it doesn't conflict with other onload functions
window.onload = function() {
    typeWriterHeadline();
    // You can initialize other functions here to ensure they all load correctly.
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
