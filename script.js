// Index Layout
// Function to switch slides
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      slide.classList.remove("active");
    }
  });

  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add("active");
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      slide.classList.remove("active");
    }
  });

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add("active");
}

// Breakfast Layout
// Initialize slide index
let slideIndices = {};

// Function to show slides
function showSlide(slideshowId, index) {
  const slides = document.querySelectorAll(`#${slideshowId} .slide`);
  if (!slideIndices[slideshowId]) slideIndices[slideshowId] = 0;

  if (index >= slides.length) slideIndices[slideshowId] = 0;
  else if (index < 0) slideIndices[slideshowId] = slides.length - 1;
  else slideIndices[slideshowId] = index;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === slideIndices[slideshowId]) {
      slide.classList.add('active');
    }
  });
}

// Next/Prev control functions
function nextSlide(slideshowId) {
  showSlide(slideshowId, slideIndices[slideshowId] + 1);
}

function prevSlide(slideshowId) {
  showSlide(slideshowId, slideIndices[slideshowId] - 1);
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach(slideshow => {
    const id = slideshow.getAttribute("id");
    slideIndices[id] = 0;
    showSlide(id, 0);
  });
});

// Foood Layout
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.getElementsByClassName("slide");
  let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
  
  slides[currentIndex].classList.remove("active");
  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add("active");
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.getElementsByClassName("slide");
  let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
  
  slides[currentIndex].classList.remove("active");
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add("active");
}

// Liquids Layout
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  let next = (current + 1) % slides.length;
  slides[next].classList.add('active');
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  let prev = (current - 1 + slides.length) % slides.length;
  slides[prev].classList.add('active');
}

// Promo Layout
<!-- JavaScript -->
  <script>
    // JavaScript for handling form submission
    document.getElementById("signup-form").addEventListener("submit", function(event) {
      event.preventDefault();  // Prevent page reload on form submit
      
      const email = event.target.querySelector("input[type=email]").value;
      if (email) {
        document.getElementById("thank-you-message").style.display = "block";  // Show thank-you message
        event.target.reset();  // Clear the form
      }
    }
  
