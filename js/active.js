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
    })
    
    //project
    $('.project-active').owlCarousel({
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
                items:4
            }
        }
    })

    //video popup
    $('.video-popup').magnificPopup({ 
        type: 'iframe'
    });
    
});
