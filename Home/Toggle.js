const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the sidebar visibility when the hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the 'active' class to slide the sidebar in/out
  hamburger.classList.toggle('toggle'); // Change the hamburger icon to "X"
});