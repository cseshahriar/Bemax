$(document).ready(function() {
    //main slider
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],  
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1 
            },
            1000:{
                items:1
            }
        }
    });
    
    //project
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],  
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    //blog
    $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],  
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //testimonial
    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],  
        dots: true,
        responsive:{
            0:{
                items:1 
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //brand
    $('.brand-active').owlCarousel({
        loop:true,
        nav:false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],  
        dots: true,
        autoplay: true,
        margin:50,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    }); 

    //video popup
    $('.video-popup').magnificPopup({ 
        type: 'iframe'
    });
    
});
