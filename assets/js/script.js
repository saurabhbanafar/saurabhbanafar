

// Page Loader
window.addEventListener('load', function () {
    const loader = document.getElementById('page-loader');

    if (loader) {
        // Add a small delay to ensure smooth animation
        setTimeout(() => {
            loader.classList.add('fade-out');

            // Remove loader from DOM after animation completes
            setTimeout(() => {
                loader.remove();
            }, 800);
        }, 1000); // Show loader for at least 1 second
    }
});


// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * This script checks if the device is not a touch-enabled device and adds a 'can-hover'
 * class to the body. This allows CSS to selectively apply hover effects only to
 * devices that can truly hover, preventing "sticky hover" issues on touchscreens.
 */
document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!isTouchDevice) {
        document.body.classList.add('can-hover');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // Hide mobile menu on scroll
    hideMenu();
});

const navMenu = document.getElementById('navmenu');

// Mobile menu toggle function
function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Function to hide the mobile menu
function hideMenu() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

// Add event listener to each nav link to hide menu on click
document.querySelectorAll('#navmenu .navbtn').forEach(navLink => {
    navLink.addEventListener('click', hideMenu);
});


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animations
document.querySelectorAll('.skill-card, .project-card, .blog-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});


// Bio typewriting effect
const typewriter = document.getElementById("typewriter");
const texts = [
    "Student @ IIT Madras",
    "Data Science Enthusiast",
    "Web Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--;
        typewriter.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typewriter.textContent = currentText.substring(0, charIndex);
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        delay = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
    }

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);

//  Contact  Form /////


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const btn = document.getElementById("submit-btn");

    // Store original button text
    const originalText = btn.textContent;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Reset any previous states
        btn.classList.remove("success", "error");

        // Add loading state with smooth transition
        btn.disabled = true;
        btn.classList.add("loading");
        btn.textContent = "Sending...";

        try {
            const response = await fetch("https://formspree.io/f/xvgbdpow", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                // Success sequence
                btn.classList.remove("loading");

                // Small delay for smooth transition
                setTimeout(() => {
                    btn.classList.add("success");
                    btn.textContent = "✓ Message Sent!";
                }, 200);

                // Reset form
                form.reset();

                // Reset button after 3 seconds with fade transition
                setTimeout(() => {
                    btn.classList.add("loading"); // Use loading class for transition
                    btn.textContent = "Resetting...";

                    setTimeout(() => {
                        btn.classList.remove("success", "loading");
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 500);
                }, 3000);

            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);

            // Error sequence
            btn.classList.remove("loading");

            setTimeout(() => {
                btn.classList.add("error");
                btn.textContent = "✗ Failed to Send";
            }, 200);

            // Reset button after 3 seconds
            setTimeout(() => {
                btn.classList.add("loading"); // Use loading class for transition
                btn.textContent = "Try Again...";

                setTimeout(() => {
                    btn.classList.remove("error", "loading");
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 500);
            }, 3000);
        }
    });
});