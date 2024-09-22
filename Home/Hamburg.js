  // Select the close icon by its id
  const closeIcon = document.getElementById('cl');

  // Add an event listener to the close icon
  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the 'active' class to hide the sidebar
    hamburger.classList.remove('toggle'); // Reset the hamburger icon
  });