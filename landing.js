$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Mobile menu toggle
    const $mobileToggle = $('.mobile-toggle');
    const $menu = $('.menu');
    const $navLinks = $('.nav-links a');
    const $body = $('body');

    $mobileToggle.on('click', function(e) {
        e.stopPropagation();
        $menu.toggleClass('active');
        $body.toggleClass('menu-open');
        const $icon = $(this).find('i');
        $icon.toggleClass('fa-bars fa-times');
    });

    // Close menu when clicking a link
    $navLinks.on('click', function() {
        if (window.innerWidth <= 768) {
            $menu.removeClass('active');
            $body.removeClass('menu-open');
            $mobileToggle.find('i').removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInsideMenu = $(e.target).closest('.menu').length > 0;
            const isClickOnToggle = $(e.target).closest('.mobile-toggle').length > 0;

            if (!isClickInsideMenu && !isClickOnToggle && $menu.hasClass('active')) {
                $menu.removeClass('active');
                $body.removeClass('menu-open');
                $mobileToggle.find('i').removeClass('fa-times').addClass('fa-bars');
            }
        }
    });

    // Prevent menu from closing when clicking inside
    $menu.on('click', function(e) {
        e.stopPropagation();
    });

    // Change navbar background on scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css({
                'background': 'rgba(13, 17, 38, 0.98)',
                'backdrop-filter': 'blur(10px)'
            });
        } else {
            $('.navbar').css({
                'background': 'rgba(13, 17, 38, 0.95)',
                'backdrop-filter': 'none'
            });
        }
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Handle window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                $menu.removeClass('active');
                $body.removeClass('menu-open');
                $mobileToggle.find('i').removeClass('fa-times').addClass('fa-bars');
            }
        }, 250);
    });

    // Initialize Testimonials Slider
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}); 