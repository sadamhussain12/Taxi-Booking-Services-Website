// Main JavaScript for header functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Search functionality
    const searchBtns = document.querySelectorAll('.search-btn .nav-right-link');
    const searchArea = document.querySelector('.search-area');
    const searchIconBtn = document.querySelector('.search-icon-btn');
    
    // Toggle search area
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            searchArea.classList.toggle('open');
        });
    });
    
    // Close search when clicking search button inside search area
    if (searchIconBtn) {
        searchIconBtn.addEventListener('click', function(e) {
            e.preventDefault();
            searchArea.classList.remove('open');
        });
    }
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-area') && !e.target.closest('.search-btn')) {
            searchArea.classList.remove('open');
        }
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mainNav = document.getElementById('main_nav');
    
    if (navbarToggler && mainNav) {
        navbarToggler.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
    
    // Sidebar popup functionality
    const sidebarBtn = document.querySelector('.sidebar-btn .nav-right-link');
    const sidebarPopup = document.querySelector('.sidebar-popup');
    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    const closeSidebar = document.querySelector('.close-sidebar-popup');
    
    if (sidebarBtn && sidebarPopup && sidebarWrapper) {
        // Open sidebar
        sidebarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebarPopup.classList.add('open');
            sidebarWrapper.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
        
        // Close sidebar
        function closeSidebarFunc() {
            sidebarPopup.classList.remove('open');
            sidebarWrapper.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        if (closeSidebar) {
            closeSidebar.addEventListener('click', closeSidebarFunc);
        }
        
        // Close sidebar when clicking outside
        sidebarPopup.addEventListener('click', function(e) {
            if (e.target === sidebarPopup) {
                closeSidebarFunc();
            }
        });
        
        // Close sidebar with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebarPopup.classList.contains('open')) {
                closeSidebarFunc();
            }
        });
    }
    
    // Handle dropdown menus on mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    dropdownMenu.classList.toggle('show');
                    
                    // Close other open dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu && menu.classList.contains('show')) {
                            menu.classList.remove('show');
                        }
                    });
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 991) {
            if (!e.target.closest('.navbar-collapse') && !e.target.closest('.navbar-toggler') && mainNav) {
                mainNav.classList.remove('show');
                
                // Also close all dropdown menus
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        }
    });
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });
    }
});



// home hero slider js


  $(document).ready(function(){
    $(".hero-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      smartSpeed: 800,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ]
      // 👇 removed animateOut so it slides instead of fading
    });
  });



// counter js

$(document).ready(function () {
    // function to start counting
    function startCounter() {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-to'),
                speed = parseInt($this.attr('data-speed')) || 2000;

            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: speed,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum + '+');
                    }
                }
            );
        });
    }

    // detect when section enters viewport
    var counterTriggered = false;
    $(window).on('scroll', function () {
        var oTop = $('.counter-area').offset().top - window.innerHeight;
        if (!counterTriggered && $(window).scrollTop() > oTop) {
            startCounter();
            counterTriggered = true;
        }
    });
});


// Testimonials JS

      $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        },
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ]
      });


      
// partner section JS

        $('.partner-slider').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 700,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200: { items: 6 }
    }
  });



      // Show or hide the scroll-top button on scroll
  window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scroll-top");
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });

  // Smooth scroll to top when clicked
  document.getElementById("scroll-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });