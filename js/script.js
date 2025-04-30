document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initGamesDropdown();
    initHeroSlider();
});

function initNavbar() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');
    const navHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (document.querySelector('.mobile-menu.active')) {
            return;
        }
        
        // Detect scroll direction
        if (scrollTop > lastScrollTop && scrollTop > navHeight) {
            // Scrolling down - hide navbar
            navbar.style.transform = `translateY(-${navHeight}px)`;
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Mobile menu initialization
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
        });
    }
}

// Games dropdown functionality for desktop
function initGamesDropdown() {
    const gamesDropdown = document.querySelector('.dropdown-link');
    const dropdownMenu = document.querySelector('.games-dropdown');
    const dropdownIcon = gamesDropdown.querySelector('i');
    
    if (gamesDropdown) {
        gamesDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');
            dropdownIcon.classList.toggle('fa-chevron-up');
            dropdownIcon.classList.toggle('fa-chevron-down');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-link') && !e.target.closest('.games-dropdown')) {
            if (dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
                dropdownIcon.classList.remove('fa-chevron-up');
                dropdownIcon.classList.add('fa-chevron-down');
            }
        }
    });
}

// Hero slider functionality
function initHeroSlider() {
    const dots = document.querySelectorAll('.dot');
    if (!dots.length) return;
    
    const heroImage = document.querySelector('.hero-image img');
    const trailerTitle = document.querySelector('.trailer-text h2');
    const trailerSubtitle = document.querySelector('.trailer-text h1');
    
    // Sample image and text data for different slides
    const slides = [
        {
            img: 'img/gta6.png',
            title: 'Grand Theft Auto VI',
            subtitle: 'Trailer 1'
        },
        {
            img: 'img/gta5E.png',
            title: 'Grand Theft Auto V',
            subtitle: 'Experience the Best Version of GTAV and GTA Online on PC with GTAV Enhanced'
        },
        {
            img: 'img/gtao.png',
            title: 'Grand Theft Auto Online',
            subtitle: 'Oscar Guzman Flies Again'
        },
        {
            img: 'img/rdr.png',
            title: 'Red Dead Redemption',
            subtitle: 'Now on PC'
        }
    ];
    
    // Add click event to each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Update content
            if (heroImage) heroImage.src = slides[index].img;
            if (trailerTitle) trailerTitle.textContent = slides[index].title;
            if (trailerSubtitle) trailerSubtitle.textContent = slides[index].subtitle;
            
            // Optional: Add fade animation
            if (heroImage) {
                heroImage.classList.add('fade');
                setTimeout(() => {
                    heroImage.classList.remove('fade');
                }, 500);
            }
        });
    });
}