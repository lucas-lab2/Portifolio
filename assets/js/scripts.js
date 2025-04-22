// Dark mode toggle
const htmlEl = document.documentElement;
document.getElementById('dark-toggle').addEventListener('click', () => {
  htmlEl.classList.toggle('dark');
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Scroll reveal
const srObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      srObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(el => {
  el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
  srObserver.observe(el);
});

// GLightbox init
const lightbox = GLightbox({ selector: '.glightbox' });
