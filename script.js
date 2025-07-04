
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const authButtons = document.querySelector('.auth-buttons');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    authButtons.style.display = 'none';
                }
            });
        });
        
        // Quantity Selector
        const minusBtn = document.querySelector('.quantity-btn:first-child');
        const plusBtn = document.querySelector('.quantity-btn:last-child');
        const quantityDisplay = document.querySelector('.quantity');
        
        let quantity = 1;
        
        minusBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(13, 27, 42, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'var(--dark-color)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }
        });
        
        // Initialize testimonial slider (would need a proper slider library for full functionality)
        // This is just a placeholder
        console.log('Testimonial slider would be initialized here with a proper library');
