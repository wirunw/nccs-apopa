document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    if (menuToggle && navbarLinks) {
        menuToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992 && navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
            }
        });
    });

    // Mobile-specific dropdown handling for the "More" menu
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropdownLink = dropdown.querySelector('a');
        
        // Function to handle dropdown behavior based on screen size
        function handleDropdownClick(e) {
            if (window.innerWidth <= 992 && navbarLinks.classList.contains('active')) {
                // On mobile with menu open, toggle the dropdown content without navigating
                e.preventDefault();
                dropdown.classList.toggle('mobile-active');
            } else if (window.innerWidth <= 992) {
                // On mobile with menu closed, open the menu
                e.preventDefault();
                navbarLinks.classList.add('active');
            }
            // On desktop, let default behavior continue (show dropdown on hover)
        }

        if (dropdownLink) {
            dropdownLink.addEventListener('click', handleDropdownClick);
        }
    }
});