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

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById('mainImage');
    const hotspots = document.querySelectorAll('.hotspot');
    const returnButton = document.getElementById('returnButton');

    hotspots.forEach(function(hotspot) {
        hotspot.addEventListener("click", function() {
            const nextImage = this.dataset.image;
            mainImage.src = nextImage;
        });
    });

    mainImage.addEventListener("load", function() {
        // Hide all hotspots by default
        hotspots.forEach(function(hotspot) {
            hotspot.style.display = 'none';
        });

        // Show relevant hotspots based on the current image
        if (mainImage.src.includes("1c.png")) {
            document.getElementById('hotspot1').style.display = 'block';
        } else if (mainImage.src.includes("2c.png")) {
            document.getElementById('hotspot2').style.display = 'block';
            document.getElementById('hotspot3').style.display = 'block';
            document.getElementById('hotspot4').style.display = 'block';
            document.getElementById('hotspot5').style.display = 'block';
            document.getElementById('hotspot6').style.display = 'block';
            document.getElementById('hotspot7').style.display = 'block';
            document.getElementById('hotspot8').style.display = 'block';
        } else {
            document.getElementById('returnHotspot').style.display = 'block';
        }

        // Show or hide return button based on the current image
        if (mainImage.src.includes("1c.png") || mainImage.src.includes("2c.png")) {
            returnButton.style.display = 'none';
        } else {
            returnButton.style.display = 'block';
        }
    });

    returnButton.addEventListener("click", function() {
        mainImage.src = "2c.png"; // Change to whatever your initial image is
    });
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
        "'They think it's going to be bad. That's the prediction.'",
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
