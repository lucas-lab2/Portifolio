document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('show');
          hamburger.classList.remove('active');
        }
      });
    });
  });