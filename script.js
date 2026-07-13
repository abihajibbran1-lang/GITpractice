// Bella Vista — main script
// Feature scripts get added here as each section is built.
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fix (#7): close the mobile menu when a nav link is clicked
document.querySelectorAll('#navLinks a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
}