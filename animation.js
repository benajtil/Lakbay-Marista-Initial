// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class to cards when they come into view
function addAnimationToCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('fadeIn');
            card.classList.remove('fadeOut');
        } else {
            card.classList.remove('fadeIn');
            card.classList.add('fadeOut');
        }
    });
}

// Listen for scroll events and add animation to cards
window.addEventListener('scroll', addAnimationToCards);

// Initial check for cards in view on page load
addAnimationToCards();
