(function () {
    "use strict";

    // Función para esperar a que jQuery y Owl Carousel estén disponibles
    function waitForDependencies(callback) {
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
            console.log('✅ Dependencias listas, ejecutando main.js');
            callback(jQuery);
        } else {
            console.log('⏳ Esperando dependencias...');
            setTimeout(() => waitForDependencies(callback), 100);
        }
    }

    // Ejecutar cuando las dependencias estén listas
    waitForDependencies(function ($) {
        console.log('🚀 Inicializando main.js con dependencias');

        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner(0);

        // Initiate the wowjs
        if (typeof WOW !== 'undefined') {
            new WOW().init();
            console.log('✅ WOW.js inicializado');
        }

        // Service-carousel
        $(".service-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            center: false,
            dots: false,
            loop: true,
            margin: 25,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        // Testimonial carousel
        if ($(".testimonial-carousel").length > 0) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: false,
                dots: false,
                loop: true,
                margin: 25,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 1 },
                    992: { items: 2 },
                    1200: { items: 2 }
                }
            });
            console.log('✅ Testimonial carousel inicializado');
        }

        console.log('✅ main.js completamente inicializado');
    });
})();

