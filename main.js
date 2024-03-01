// JavaScript code for the slideshow
var slideIndex = 0;
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
showSlides();


var hotspots = [
    { top: '20%', left: '20%', width: '20%', height: '20%', image: '2.jpg' },
    { top: '50%', left: '50%', width: '20%', height: '20%', image: '3.jpg' }
];

var mainImage = '1.jpg'; 

document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";

var currentImage = mainImage;

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
            return; 
        }
        document.querySelector('.container').style.backgroundImage = "url('" + hotspot.image + "')";
        document.getElementById('returnButton').style.display = 'block';
        currentImage = hotspot.image;
    });
    document.querySelector('.container').appendChild(hotspotElement);
});

document.getElementById('returnButton').addEventListener('click', function() {
    document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";
    document.getElementById('returnButton').style.display = 'none';
    currentImage = mainImage;
});

// typewriter - headline
// Typewriter for headline
function typeWriterHeadline() {
    var headlineIndex = 0;
    var headlineTxt = 'Work, Reimagined';
    var headlineSpeed = 150; // Adjust the speed as needed
    var headlinePauseTime = 1000; // Pause time for the headline
    var headlineElement = document.getElementById("demo");

    function typeWriter() {
        if (headlineIndex < headlineTxt.length) {
            headlineElement.innerHTML += headlineTxt.charAt(headlineIndex);
            headlineIndex++;
            setTimeout(typeWriter, headlineSpeed); 
        } else {
            setTimeout(resetHeadlineTypewriter, headlinePauseTime);
        }
    }

    function resetHeadlineTypewriter() {
        headlineIndex = 0;
        headlineElement.innerHTML = '';
        typeWriter();
    }

    typeWriter(); // Start the typewriter effect
}

// Typewriter for first quote
function typeWriterFirstQuote() {
    var sentence = "'I feel like I get a little stir crazy when I'm stuck in an apartment all day'";
    var quoteSpeed = 75;
    var quoteElement = document.getElementById("quoteText");

    function typeWriter() {
        var charIndex = 0;
        var interval = setInterval(function() {
            if (charIndex < sentence.length) {
                quoteElement.innerHTML += sentence.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval); // Stop typing after completing the sentence
            }
        }, quoteSpeed);
    }

    typeWriter(); // Start the typewriter effect
}

// Typewriter for second quote
function typeWriterSecondQuote() {
    var sentence = "'They think it's going to be bad. That's the prediction'";
    var quoteSpeed = 75;
    var quoteElement = document.getElementById("quoteThreeText");

    function typeWriter() {
        var charIndex = 0;
        var interval = setInterval(function() {
            if (charIndex < sentence.length) {
                quoteElement.innerHTML += sentence.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval); 
            }
        }, quoteSpeed);
    }

    typeWriter(); 
}

window.onload = function() {
    typeWriterHeadline();
    typeWriterFirstQuote();
    typeWriterSecondQuote();
};


