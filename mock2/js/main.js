/**
 * Consilium Consulting - Main JavaScript
 * Handles interactivity for the website
 */

$(document).ready(function() {
  // Update copyright year
  $('#copyright-year').text(new Date().getFullYear());
  
  // Mobile navigation toggle
  $('.mobile-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    
    if ($(this).hasClass('active')) {
      $(this).find('span:nth-child(1)').css({
        'transform': 'rotate(45deg) translate(5px, 5px)'
      });
      $(this).find('span:nth-child(2)').css({
        'opacity': '0'
      });
      $(this).find('span:nth-child(3)').css({
        'transform': 'rotate(-45deg) translate(7px, -7px)'
      });
    } else {
      $(this).find('span').css({
        'transform': 'none',
        'opacity': '1'
      });
    }
  });
  
  // Close mobile menu when link is clicked
  $('.nav-link').on('click', function() {
    $('.mobile-toggle').removeClass('active');
    $('.nav-menu').removeClass('active');
    $('.mobile-toggle').find('span').css({
      'transform': 'none',
      'opacity': '1'
    });
  });
  
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800);
    }
  });
  
  // Header scroll effect
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  });
  
  // Testimonial slider
  let currentSlide = 0;
  const slides = $('.testimonial-slide');
  const dots = $('.dot');
  const slideCount = slides.length;
  
  function showSlide(index) {
    slides.hide();
    $(slides[index]).fadeIn();
    
    dots.removeClass('active');
    $(dots[index]).addClass('active');
    
    currentSlide = index;
  }
  
  // Initialize slider
  showSlide(currentSlide);
  
  // Previous slide button
  $('.control-prev').on('click', function() {
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) {
      prevSlide = slideCount - 1;
    }
    showSlide(prevSlide);
  });
  
  // Next slide button
  $('.control-next').on('click', function() {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slideCount) {
      nextSlide = 0;
    }
    showSlide(nextSlide);
  });
  
  // Dot navigation
  dots.on('click', function() {
    const slideIndex = $(this).data('slide');
    showSlide(slideIndex);
  });
  
  // Auto slide (optional, uncomment to enable)
  /*
  let slideInterval = setInterval(function() {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slideCount) {
      nextSlide = 0;
    }
    showSlide(nextSlide);
  }, 5000);
  
  $('.testimonial-slider').on('mouseenter', function() {
    clearInterval(slideInterval);
  }).on('mouseleave', function() {
    slideInterval = setInterval(function() {
      let nextSlide = currentSlide + 1;
      if (nextSlide >= slideCount) {
        nextSlide = 0;
      }
      showSlide(nextSlide);
    }, 5000);
  });
  */
  
  // Animate elements when they come into view
  function animateOnScroll() {
    $('.service-card, .approach-feature, .process-step, .case-study-card').each(function() {
      const elementTop = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const windowHeight = $(window).height();
      const scrollY = $(window).scrollTop();
      
      if (scrollY > elementTop - windowHeight + elementHeight / 2) {
        $(this).addClass('animate');
      }
    });
  }
  
  // Add CSS for animation classes
  $('<style>')
    .prop('type', 'text/css')
    .html(`
      .service-card, .approach-feature, .process-step, .case-study-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .service-card.animate, .approach-feature.animate, .process-step.animate, .case-study-card.animate {
        opacity: 1;
        transform: translateY(0);
      }
      .process-step:nth-child(2), .service-card:nth-child(2), .case-study-card:nth-child(2) {
        transition-delay: 0.2s;
      }
      .process-step:nth-child(3), .service-card:nth-child(3), .case-study-card:nth-child(3) {
        transition-delay: 0.4s;
      }
      .process-step:nth-child(4), .service-card:nth-child(4) {
        transition-delay: 0.6s;
      }
      .process-step:nth-child(5), .service-card:nth-child(5) {
        transition-delay: 0.8s;
      }
      .service-card:nth-child(6) {
        transition-delay: 1s;
      }
    `)
    .appendTo('head');
  
  // Call animation function on scroll
  $(window).on('scroll', animateOnScroll);
  // Call once on page load
  animateOnScroll();
});