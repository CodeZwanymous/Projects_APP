    // Show the cookie consent pop-up after page load
    window.onload = function() {
      const cookieConsent = document.getElementById('cookieConsent');
      cookieConsent.classList.add('active');

      document.getElementById('acceptCookies').onclick = function() {
        // Code to accept cookies
        cookieConsent.style.display = 'none'; // Hide the pop-up
      };

      document.getElementById('declineCookies').onclick = function() {
        // Code to decline cookies
        cookieConsent.style.display = 'none'; // Hide the pop-up
      };
    };