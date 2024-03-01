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

<<<<<<< Updated upstream

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
var headlineIndex = 0;
var headlineTxt = 'Work, Reimagined';
var headlineSpeed = 100; // Adjust the speed as needed
var headlinePauseTime = 5000; // Pause time for the headline
=======
// Animate the headline
var i = 0;
var txt = 'Work, Reimagined';
var speed = 50;
>>>>>>> Stashed changes

function typeWriterHeadline() {
    if (headlineIndex < headlineTxt.length) {
        document.getElementById("demo").innerHTML += headlineTxt.charAt(headlineIndex);
        headlineIndex++;
        setTimeout(typeWriterHeadline, headlineSpeed); 
    } else {
<<<<<<< Updated upstream
        setTimeout(resetHeadlineTypewriter, headlinePauseTime);
    }
}

function resetHeadlineTypewriter() {
    headlineIndex = 0;
    document.getElementById("demo").innerHTML = '';
    typeWriterHeadline();
}

// Quote typewriter
function typeWriterQuote() {
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
    window.addEventListener('scroll', function() {
        var quoteText = document.getElementById("quoteText");
        if (isElementInViewport(quoteText)) {
            // If the quote element is in the viewport, start the typewriter effect again
            typeWriter();
        }
    });


}


window.onload = function() {
    typeWriterHeadline();
    typeWriterQuote();
};
=======
                // Call the quote typewriter after the headline is finished
        }
        window.onload = function() {
typeWriter();
};

window.onload = function() {
    typeWriterHeadline();
};

// animate the pull quote
// function typeWriterQuote() {
//     var i = 0;
//     var txt = 'I feel like I get a little stir crazy when I\'m stuck in an apartment all day';
//     var speed = 75;
//     var pauseTime = 5000;

//     function typeWriter() {
//         if (quoteIndex < quoteTxt.length) {
//         document.getElementById("quoteText").innerHTML += quoteTxt.charAt(quoteIndex); // Corrected the ID here
//         quoteIndex++;
//         setTimeout(typeWriter, quoteSpeed);
//     } else {
//         setTimeout(resetTypewriter, pauseTime);
//     }
// }
//     function resetTypewriter() {
//         quoteIndex = 0;
//         document.getElementById("quoteText").innerHTML = ''; // Corrected the ID here
//         typeWriter();
//     }
//     typeWriter();
// };

>>>>>>> Stashed changes
