// Toggle & Responsive Navigation
const Navslide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener ("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
};

Navslide()


// Clear form before unload
window.onbeforeunloud = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// Mengaktifkan smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Scroll ke elemen yang dituju
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Efek scroll halus
      });
    });
  });

  // DropDown JS
  document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add touch support for mobile devices
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Only prevent default if on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('touch-active');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('touch-active');
            }
        });
    });
    
    // Add this to your existing responsive navigation code
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    
    if (burger) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            
            // Optional: Close all dropdowns when opening/closing mobile menu
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('touch-active');
            });
        });
    }
});