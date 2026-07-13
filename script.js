// Bella Vista — main script
// Feature scripts get added here as each section is built.
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// NOTE: clicking a link inside navLinks does not close the menu.
// Known issue — tracked separately.
// Contact form (static site — no backend, just a friendly confirmation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
}