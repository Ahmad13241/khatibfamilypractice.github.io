/**
 * Khatib Family Practice - Main JavaScript
 * Handles interactive elements like mobile menu, testimonial slider, etc.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !event.target.closest('nav') && 
            !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('sticky');
                
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    header.classList.add('hidden');
                } else {
                    // Scrolling up
                    header.classList.remove('hidden');
                }
            } else {
                header.classList.remove('sticky');
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
                
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple form validation for the appointment form
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = appointmentForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                appointmentForm.querySelector('.form-error-message').style.display = 'block';
            }
        });
        
        // Remove error styling on input
        appointmentForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                appointmentForm.querySelector('.form-error-message').style.display = 'none';
            });
        });
    }
}); 