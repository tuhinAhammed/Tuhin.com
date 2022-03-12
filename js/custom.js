
        new WOW().init();

        // type js here
        var typed = new Typed('.anim', {
            // Waits 1000ms after typing "First"
            strings: ['a Web designer',
                'Web Developer',
                'Web Programer',
                'WordPress Designer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        // mixitup js here

        $(document).ready(function () {
            var mixer = mixitup('.box-list');
        });

        // animation-counter js here

            $('.html-counter').animationCounter({
        start: 0,
        end: 90,
        step: 1,
        delay: 50,
        txt: '%'
        });

        $('.css-counter').animationCounter({
        start: 0,
        end: 80,
        step: 1,
        delay: 50,
        txt: '%'
        });

        $('.bootstrap-counter').animationCounter({
        start: 0,
        end: 65,
        step: 1,
        delay: 50,
        txt: '%'
        });

        $('.js-counter').animationCounter({
        start: 0,
        end: 75,
        step: 1,
        delay: 50,
        txt: '%'
        });

        $('.wp-counter').animationCounter({
        start: 0,
        end: 40,
        step: 1,
        delay: 50,
        txt: '%'
        });

        $('.php-counter').animationCounter({
        start: 0,
        end: 50,
        step: 1,
        delay: 50,
        txt: '%'
        });


    

        // Add active class to the current button (highlight it)
        var header = document.getElementById("active-btn");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        // magnific popup here
        $(document).ready(function () {
            $('.zoom').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });




        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })
