// scripts.js

// Cookie Banner Functionality
// Checks localStorage for cookie consent and toggles banner display
window.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  // Show banner only if not previously accepted
  if (!localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }

  // Handle "Einverstanden" button click
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });

  // Intersection Observer for section fade-in
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Active navigation link highlighting on scroll
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
});

// Имитация отправки формы и появления сообщения
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // имитация отправки
      successMsg.classList.add('visible');
      // сбросить поля формы (опционально)
      form.reset();
      // убрать сообщение через 3 секунды
      setTimeout(() => {
        successMsg.classList.remove('visible');
      }, 3000);
    });
  }
});




document.addEventListener("DOMContentLoaded", function(){
  const imgs = document.querySelectorAll('.bg-slider img');
  let idx = 0;
  setInterval(() => {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }, 5000); 
});


