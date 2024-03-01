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


// coffee shop content begins
var hotspots = [];

var mainImage = '1c.png'; 

document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";

var currentImage = mainImage;

if (mainImage === '1c.png') {
    hotspots.push({ top: '80%', left: '40%', width: '20%', height: '20%', image: '2c.png' });
}

if (mainImage === '2c.png') {
    hotspots.push(
        { top: '0%', left: '0%', width: '20%', height: '20%', image: '1c.png' },
        { top: '10%', left: '30%', width: '15%', height: '15%', image: '3c.png' },
        { top: '30%', left: '50%', width: '15%', height: '15%', image: '4c.png' },
        { top: '50%', left: '70%', width: '15%', height: '15%', image: '5c.png' },
        { top: '70%', left: '30%', width: '15%', height: '15%', image: '6c.png' },
        { top: '70%', left: '70%', width: '15%', height: '15%', image: '7c.png' },
        { top: '30%', left: '10%', width: '15%', height: '15%', image: '8c.png' }
    );
}

// Adding hotspots for returning to '2c.png' for images '3c.png' through '8c.png'
if (mainImage === '3c.png' || mainImage === '4c.png' || mainImage === '5c.png' || mainImage === '6c.png' || mainImage === '7c.png' || mainImage === '8c.png') {
    hotspots.push({ top: '0%', left: '0%', width: '20%', height: '20%', image: '2c.png' });
}

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
        document.querySelector('.container').style.backgroundImage = "url('" + hotspot.image + "')";
        currentImage = hotspot.image;
    });
    document.querySelector('.container').appendChild(hotspotElement);
});

document.getElementById('returnButton').addEventListener('click', function() {
    document.querySelector('.container').style.backgroundImage = "url('" + mainImage + "')";
    currentImage = mainImage;
});



// coffee shop content ends



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
    var sentences = [
        "'I feel like I get a little stir crazy when I'm stuck in an apartment all day'",
    ];
    var quoteIndex = 0;
    var quoteSpeed = 75;
    var quoteElement = document.getElementById("quoteText");
    var pauseTime = 5000; // Pause time between quotes

    function typeWriter() {
        var charIndex = 0;
        var sentence = sentences[quoteIndex];
        var interval = setInterval(function() {
            if (charIndex < sentence.length) {
                quoteElement.innerHTML += sentence.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval); // Stop typing after completing the sentence
                // Pause before typing the next quote
                setTimeout(function() {
                    // Clear existing content
                    quoteElement.innerHTML = '';
                    // Move to the next quote or loop back to the first quote
                    quoteIndex = (quoteIndex + 1) % sentences.length;
                    // Start typing the next quote
                    typeWriter();
                }, pauseTime);
            }
        }, quoteSpeed);
    }

    typeWriter(); // Start the typewriter effect
}

// Typewriter for second quote
function typeWriterSecondQuote() {
    var sentences = [
        "'They think it's going to be bad. That's the prediction'",
    ];
    var quoteIndex = 0;
    var quoteSpeed = 75;
    var quoteElement = document.getElementById("quoteThreeText");
    var pauseTime = 5000; // Pause time between quotes

    function typeWriter() {
        var charIndex = 0;
        var sentence = sentences[quoteIndex];
        var interval = setInterval(function() {
            if (charIndex < sentence.length) {
                quoteElement.innerHTML += sentence.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval); // Stop typing after completing the sentence
                // Pause before typing the next quote
                setTimeout(function() {
                    // Clear existing content
                    quoteElement.innerHTML = '';
                    // Move to the next quote or loop back to the first quote
                    quoteIndex = (quoteIndex + 1) % sentences.length;
                    // Start typing the next quote
                    typeWriter();
                }, pauseTime);
            }
        }, quoteSpeed);
    }

    typeWriter(); // Start the typewriter effect
}

// Call typewriter functions when the window is loaded
window.onload = function() {
    typeWriterHeadline();
    typeWriterFirstQuote();
    typeWriterSecondQuote();
};
