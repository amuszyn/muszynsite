// script.js
window.addEventListener('scroll', function () {
    var welcomeText = document.getElementById('welcome-text');
    var distanceFromTop = document.getElementById('content').getBoundingClientRect().top;
    var fontSize = 2 + (distanceFromTop / 280); // Using addition because as we scroll down the distanceFromTop becomes negative.
    console.log(fontSize)
    if (fontSize < 1) {
        fontSize = 1;
    }
    welcomeText.style.fontSize = fontSize + 'rem';
});

// script.js
window.addEventListener('load', function () {
    var cardContainer = document.getElementById('card-container');
    var cards = cardContainer.getElementsByClassName('card');
    var maxWidth = 0;

    // Find the maximum width of the cards
    for (var i = 0; i < cards.length; i++) {
        var cardWidth = cards[i].offsetWidth;
        if (cardWidth > maxWidth) {
            maxWidth = cardWidth;
        }
    }

    // Set the maximum width to all cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.width = maxWidth + 'px';
    }
});


// Function to handle scroll event
function handleScroll() {
    const cardContainer = document.getElementById('card-container');
    const cards = cardContainer.querySelectorAll('.card');

    cards.forEach(card => {
        // Get card's bounding rectangle
        const rect = card.getBoundingClientRect();

        // Check if at least 50% of the card is within the viewport
        if (rect.top < window.innerHeight * 0.78 && rect.bottom > 0) {
            // Add animation class if card is in view
            card.classList.add('animate-in');
        } else {
            // Remove animation class if card is out of view
            card.classList.remove('animate-in');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

