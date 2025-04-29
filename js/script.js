document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Here you would normally change the slide
            // For this static version, we're just updating the dots
        });
    });
    
    // Mobile menu toggle functionality could be added here
    // For a complete implementation, you would add more interactive elements
    
    // Dropdown menu functionality
    const dropdownLink = document.querySelector('.dropdown-link');
    
    if (dropdownLink) {
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle dropdown menu visibility
            // This would require additional HTML/CSS to be fully implemented
            console.log('Dropdown clicked');
        });
    }
});

// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.querySelector('header');
const navHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
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

// Games dropdown functionality
const gamesDropdown = document.querySelector('.dropdown-link');
const dropdownMenu = document.querySelector('.games-dropdown');
const dropdownIcon = gamesDropdown.querySelector('i');

gamesDropdown.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('active');
    dropdownIcon.classList.toggle('fa-chevron-up');
    dropdownIcon.classList.toggle('fa-chevron-down');
});

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

// Hero slider functionality
const dots = document.querySelectorAll('.dot');
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
        img: 'img/gta6.png',
        title: 'Red Dead Redemption II',
        subtitle: 'Available Now'
    },
    {
        img: 'img/gta6.png',
        title: 'Grand Theft Auto V',
        subtitle: 'Enhanced Edition'
    },
    {
        img: 'img/gta6.png',
        title: 'Red Dead Online',
        subtitle: 'Latest Update'
    }
];

// Add click event to each dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Update active dot
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Update content
        heroImage.src = slides[index].img;
        trailerTitle.textContent = slides[index].title;
        trailerSubtitle.textContent = slides[index].subtitle;
        
        // Optional: Add fade animation
        heroImage.classList.add('fade');
        setTimeout(() => {
            heroImage.classList.remove('fade');
        }, 500);
    });
});