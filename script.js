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