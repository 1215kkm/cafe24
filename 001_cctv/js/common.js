/**
 * YOURLOGO - Common JavaScript
 * 모든 페이지에서 공통으로 사용되는 스크립트
 */

// Header Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Scroll Animation (Fade In Up)
function initScrollAnimation() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 애니메이션 대상 요소들
  const animateElements = document.querySelectorAll('.section-header, .icon-menu-item, .about-image, .about-content, .prdList .item, .team-item, .board-box, .cta-content');
  animateElements.forEach(function(el) {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const gnb = document.getElementById('gnb');

  if (mobileToggle && gnb) {
    mobileToggle.addEventListener('click', function() {
      gnb.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Initialize scroll animations
  initScrollAnimation();

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (gnb && mobileToggle) {
      if (!gnb.contains(e.target) && !mobileToggle.contains(e.target)) {
        gnb.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    }
  });

  // Dropdown menu for desktop
  const mainCategoryItems = document.querySelectorAll('.mainCategory > li');
  mainCategoryItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      const subCategory = this.querySelector('.subCategory');
      if (subCategory) {
        subCategory.style.display = 'block';
      }
    });
    item.addEventListener('mouseleave', function() {
      const subCategory = this.querySelector('.subCategory');
      if (subCategory) {
        subCategory.style.display = '';
      }
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
