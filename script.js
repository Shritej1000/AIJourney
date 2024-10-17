// script.js

// Example: Basic quiz or progress tracker functionality
const tutorialLinks = document.querySelectorAll('.tutorial a');

tutorialLinks.forEach(link => {
  link.addEventListener('click', () => {
    alert('Starting Tutorial: ' + link.parentNode.querySelector('h3').textContent);
  });
});
