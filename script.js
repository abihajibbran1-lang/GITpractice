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
// Testimonials carousel
const track = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const dotsContainer = document.getElementById('testimonialDots');
let currentSlide = 0;

function buildDots() {
  const slideCount = track.children.length;
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const slideCount = track.children.length;
  currentSlide = (currentSlide + slideCount) % slideCount;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

if (track && prevBtn && nextBtn && dotsContainer) {
  buildDots();
  updateCarousel();
  prevBtn.addEventListener('click', () => {
    currentSlide -= 1;
    updateCarousel();
  });
  nextBtn.addEventListener('click', () => {
    currentSlide += 1;
    updateCarousel();
  });
}