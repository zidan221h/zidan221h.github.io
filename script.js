document.addEventListener("DOMContentLoaded", function () {
  // Fullscreen gambar
  const images = document.querySelectorAll(".fullscreen-img");
  images.forEach(function (img) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen(); // Safari
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen(); // IE11
      }
    });
  });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Formulir pendaftaran
  const form = document.getElementById("bookingForm");
  const successMsg = document.getElementById("successMessage");

  if (form && successMsg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      successMsg.style.display = "block";
      form.reset();
    });
  }
});
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
fadeEls.forEach((el) => observer.observe(el));
// Efek Ketik untuk judul Selamat Datang
const typingElement = document.getElementById("typing-text");
const textToType = "Selamat Datang!";
let i = 0;

function typeEffect() {
  if (i < textToType.length) {
    typingElement.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

typingElement.innerHTML = "";
typeEffect();
