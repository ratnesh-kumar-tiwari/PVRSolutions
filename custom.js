
jQuery(document).ready(function ($) {
                                        "use strict";
                                        $('.brand-carousel').owlCarousel({
                                            dots: false,
                                            nav: false,
                                            margin: 120,
                                            autoplayTimeout: 1000,
                                            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
                                            responsive: {
                                                0: {
                                                    items: 2
                                                },
                                                768: {
                                                    items: 3
                                                },
                                                992: {
                                                    items: 3
                                                },
                                                1024: {
                                                    items: 3
                                                },
                                                1920: {
                                                    items: 4
                                                }
                                            }
                                        })
                                    });
jQuery(document).ready(function ($) {
                                        "use strict";

                                        $('.testimonial-area').owlCarousel({
                                            loop: true,
                                            autoplay: false,
                                            autoplayTimeout: 10000,
                                            margin: 20,
                                            dots: false,
                                            nav: true,
                                            navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
                                            responsive: {
                                                0: {
                                                    items: 1,
                                                    nav: false,
                                                },
                                                768: {
                                                    items: 2,
                                                    nav: false,
                                                },
                                                992: {
                                                    items: 2
                                                },
                                                1000: {
                                                    items: 2
                                                },
                                                1920: {
                                                    items: 3,
                                                }
                                            }
                                        })
                                    });
jQuery(document).ready(function ($) {
    "use strict";

    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff7426"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 80,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff7426",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 800,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 800,
                        "size": 80,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }

    );

});
jQuery(document).ready(function ($) {
                                        "use strict";

                                        $('.portfolio-wrap').imagesLoaded(function () {

                                            if ($.fn.isotope) {

                                                var $portfolio = $('.portfolio-wrap');

                                                $portfolio.isotope({

                                                    itemSelector: '.grid-item',

                                                    filter: '*',

                                                    resizesContainer: true,

                                                    layoutMode: 'masonry',

                                                    transitionDuration: '0.8s'

                                                });
                                                $('.filter_menu li').on('click', function () {

                                                    $('.filter_menu li').removeClass('current_menu_item');

                                                    $(this).addClass('current_menu_item');

                                                    var selector = $(this).attr('data-filter');

                                                    $portfolio.isotope({

                                                        filter: selector,

                                                    });

                                                });

                                            };

                                        });

                                    });

