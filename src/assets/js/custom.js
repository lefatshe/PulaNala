//$(window).load(function () {
    $(document).ready(function () {
        setTimeout(function(){
            $("#preloader").fadeOut("slow", function () {
                $(this).remove()
            })
        }, 30);
    });
    
    function initializeFlickity() {
        if ($(window).width() > 768) {
            $('.carousel-salon').flickity({
                draggable: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-blocks').flickity({
                draggable: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-slider').flickity({
                draggable: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false,
                initialIndex: '.is-initial-select'
            });
            $('.carousel-rooms').flickity({
                draggable: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-quotes').flickity({
                autoPlay: 3000,
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-initial').flickity({
                draggable: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-secondary').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-slider-blocks').flickity({
                contain: true,
                draggable: false,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-events').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
    
    
            var heightcounter = $(".d-block-slider .carousel-initial .d-block-initial .counter").height() + 15;
            var heighttitle = $(".d-block-slider .carousel-initial .d-block-initial .title").height() + 30;
            var heighttext = $(".d-block-slider .carousel-initial .d-block-initial .text").height() + 30;
            var heighttextsmall = $(".d-block-slider .carousel-initial .d-block-initial .text-small").height() + 10;
            var heightunderline = $(".d-block-slider .carousel-initial .d-block-initial .underline").height() + 45;
            var heightimg = $(".d-block-slider .carousel-initial .d-block-initial .d-block-img").height() + 35;
            var heightblock = heighttitle + heightcounter + heighttext + heightunderline + heightimg + heighttextsmall + 75;
            $(".d-block-slider .carousel-initial .d-block-initial").css("height", heightblock);
            $(".d-block-slider .carousel-initial > .flickity-viewport").css("height", heightblock);
    
            var heightblock2 = $(".d-block-slider .carousel-slider .d-block-img.img-1").height();
            $(".d-block-slider .carousel-slider .carousel-cell").css("height", heightblock2 + 85);
            $(".d-block-slider .carousel-slider > .flickity-viewport").css("height", heightblock2 + 85);
    
            var heightblock3 = $(".d-block-slider .carousel-rooms .d-block-img").height();
            $(".d-block-slider .carousel-rooms .carousel-cell").css("height", heightblock3);
            $(".d-block-slider .carousel-rooms > .flickity-viewport").css("height", heightblock3);
        }
    
        if($(window).width() <= 768) {
            $('.carousel-salon').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-blocks').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-slider').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false,
                initialIndex: '.is-initial-select'
            });
            $('.carousel-rooms').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-quotes').flickity({
                autoPlay: 3000,
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-initial').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-secondary').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-slider-blocks').flickity({
                contain: true,
                draggable: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-events').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
            $('.carousel-threeblocks').flickity({
                draggable: true,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
    
            var heightcounter = $(".d-block-slider .carousel-initial .d-block-initial .counter").height() + 29;
            var heighttitle = $(".d-block-slider .carousel-initial .d-block-initial .title").height() + 35;
            var heighttext = $(".d-block-slider .carousel-initial .d-block-initial .text").height() + 35;
            var heighttextsmall = $(".d-block-slider .carousel-initial .d-block-initial .text-small").height() + 10;
            var heightunderline = $(".d-block-slider .carousel-initial .d-block-initial .underline").height() + 50;
            var heightimg = $(".d-block-slider .carousel-initial .d-block-initial .d-block-img").height() + 45;
            var heightblock = heighttitle + heightcounter + heighttext + heightunderline + heightimg + heighttextsmall + 140;
            $(".d-block-slider .carousel-initial .d-block-initial").css("height", heightblock);
            $(".d-block-slider .carousel-initial > .flickity-viewport").css("height", heightblock);
    
            var heightblocktext2 = $(".d-block-slider .carousel-slider .d-block-text").height();
            var heightimg2 = $(".d-block-slider .carousel-slider .d-block-img.img-1").height();
            var heightblock2 = heightblocktext2 + heightimg2;
            $(".d-block-slider .carousel-slider .carousel-cell").css("height", heightblock2 + 40);
            $(".d-block-slider .carousel-slider > .flickity-viewport").css("height", heightblock2 + 40);
    
            var heightblock3 = $(".d-block-slider .carousel-rooms .d-block-text").height();
            $(".d-block-slider .carousel-rooms .carousel-cell").css("height", heightblock3);
            $(".d-block-slider .carousel-rooms > .flickity-viewport").css("height", heightblock3);
        }
    }
    
    $(window).scroll(function () {
        AOS.init({
            delay: 200,
            once: true,
            duration: 1000,
            disable: 'mobile'
        });
    });
    
   
    
    $(window).on("load", function (e) {
    //$(document).ready(function () {
        /*setTimeout(function(){
    
        }, 500);*/
    
        var a = new LazyLoad({
            elements_selector: ".site-nav__main"
        });
    
        var waitForFP = setInterval(function () {
            if (typeof flatpickr !== 'undefined') {
                flatpickr.localize(eval('flatpickr.l10ns.'+ SITE_LANG));
                $(".b-checkin").flatpickr({
                    dateFormat: "d-m-Y",
                    minDate: "today",
                    onChange: function(selectedDates, dateStr, instance) {
                        let tomorrow = new Date(selectedDates[0].setTime(selectedDates[0].getTime() + 86400000));
                        checkout.set('minDate',
                            flatpickr.formatDate(
                                tomorrow,
                                "d-m-Y"
                            )
                        );
                        checkout.setDate(
                            flatpickr.formatDate(
                                tomorrow,
                                "d-m-Y"
                            ),
                            true,
                            "d-m-Y"
                        );
                        checkout.open();
                    }
                });
                let checkout = $(".b-checkout").flatpickr({
                    dateFormat: "d-m-Y",
                    minDate: "today"
                });
                clearInterval(waitForFP)
            }
        }, 300);
        var waitForFL = setInterval(function () {
            if (typeof $.featherlightGallery !== 'undefined') {
                $('.gallery').featherlightGallery({
                    gallery: {
                        fadeIn: 300,
                        fadeOut: 300
                    },
                    openSpeed:    300,
                    closeSpeed:   300
                });
                clearInterval(waitForFL)
            }
        }, 300);
        var waitForFLY = setInterval(function () {
            if (typeof Flickity !== 'undefined') {
                initializeFlickity();
                clearInterval(waitForFLY)
            }
        }, 300);
    });
    
    $(document).ready(function () {
        AOS.init({
            delay: 200,
            once: true,
            duration: 1000,
            disable: 'mobile'
        });
        
        var a = new LazyLoad({
            elements_selector: ".lazy"
        });
    
        if (document.querySelector('.menu-expand') !== null) {
            $(".menu-expand .menu-item-1 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-1 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-2 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-2 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-3 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-3 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-4 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-4 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-5 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-5 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-6 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-6 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-7 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-7 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-8 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-8 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-9 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-9 .menu-expand-item").addClass("open");
            });
            $(".menu-expand .menu-item-10 > span img").click(function () {
                $(".menu-expand span img").removeClass("open");
                $(this).addClass("open");
                $(".menu-expand .menu-expand-item").removeClass("open");
                $(".menu-expand .menu-item-10 .menu-expand-item").addClass("open");
            });
        }
    
        $("#menu-toggle .position-relative").click(function () {
            $(this).toggleClass("open");
        });
        $("footer .d-block-right .position-relative").click(function () {
            $(this).toggleClass("open");
        });
    
        if ($(window).width() > 768) {
            var heightthreeblocks1 = $(".d-content-three-blocks .d-content-block.block-1 .title").height();
            var heightthreeblocks2 = $(".d-content-three-blocks .d-content-block.block-2 .title").height();
            var heightthreeblocks3 = $(".d-content-three-blocks .d-content-block.block-3 .title").height();
            $(".d-content-three-blocks .d-content-block.block-1 > div > div").css("height", heightthreeblocks1);
            $(".d-content-three-blocks .d-content-block.block-2 > div > div").css("height", heightthreeblocks2);
            $(".d-content-three-blocks .d-content-block.block-3 > div > div").css("height", heightthreeblocks3);
    
            /*$(".d-content-three-blocks .d-content-block.block-1").hover(function () {
                $(this).toggleClass("hover");
                var heightthreeblocks11 = $(".d-content-three-blocks .d-content-block.block-1.hover .title").height();
                var heightthreeblocks12 = $(".d-content-three-blocks .d-content-block.block-1.hover p").height();
                var heightthreeblocks13 = $(".d-content-three-blocks .d-content-block.block-1.hover a").height();
                $(".d-content-three-blocks .d-content-block.block-1.hover > div > div").css("height", heightthreeblocks11 + heightthreeblocks12 + heightthreeblocks13 );
            });*/
        }
    
        var position = $(window).scrollTop();
        // should start at 0
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if(scroll > position) {
                $(".navbar").removeClass("scroll-up");
                $(".d-block-reservation").removeClass("scroll-up");
            } else {
                $(".navbar").addClass("scroll-up");
                $(".d-block-reservation").addClass("scroll-up");
            }
            if(scroll < position) {
                $(".navbar").removeClass("scroll-down");
                $(".d-block-reservation").removeClass("scroll-down");
            } else {
                $(".navbar").addClass("scroll-down");
                $(".d-block-reservation").addClass("scroll-down");
            }
            position = scroll;
        });
    
        $(".burger-icon").click(function () {
            $(".site-nav__menu").toggleClass("open");
            $(".site-nav__main").toggleClass("open");
            $(".c-menu__col-left").toggleClass("open");
            $(".c-menu__col-right").toggleClass("open");
            $(".navbar").toggleClass("open");
        });
        $(".burger-icon-span").click(function () {
            $(".site-nav__menu").toggleClass("open");
            $(".site-nav__main").toggleClass("open");
            $(".c-menu__col-left").toggleClass("open");
            $(".c-menu__col-right").toggleClass("open");
            $(".navbar").toggleClass("open");
        });
    
        $('.d-slider-gastronomy .carousel-blocks').on( 'click', function() {
            $('.carousel-blocks').flickity('next');
        });
        $('.d-slider-gastronomy .d-block-slider .d-block a').on( 'click', function() {
            $('.carousel-blocks').flickity('previous');
        });
        $('.d-slider-gastronomy .d-block-slider .d-block-cursor-left').on( 'click', function() {
            $('.carousel-blocks').flickity('previous');
        });
    
        $('.d-slider-blocks .d-block-cursor-right').on( 'click', function() {
            $('.carousel-slider-blocks').flickity('next');
        });
        $('.d-slider-blocks .d-block-cursor-left').on( 'click', function() {
            $('.carousel-slider-blocks').flickity('previous');
        });
        $('.d-slider-rooms .d-block-cursor-right').on( 'click', function() {
            $('.carousel-rooms').flickity('next');
        });
        $('.d-slider-rooms .d-block-cursor-left').on( 'click', function() {
            $('.carousel-rooms').flickity('previous');
        });
        $('.d-slider .d-block-cursor-right').on( 'click', function() {
            $('.carousel-slider').flickity('next');
        });
        $('.d-slider .d-block-cursor-left').on( 'click', function() {
            $('.carousel-slider').flickity('previous');
        });
        $('.d-content-gastronomy .d-block-cursor-right').on( 'click', function() {
            $('.carousel-initial').flickity('next');
        });
        $('.d-content-gastronomy .d-block-cursor-left').on( 'click', function() {
            $('.carousel-initial').flickity('previous');
        });
        $('.d-content-events .d-block-next').on( 'click', function() {
            $('.carousel-events').flickity('next');
        });
        $('.d-content-events .d-block-prev').on( 'click', function() {
            $('.carousel-events').flickity('previous');
        });
        $('.d-content-salon .d-block-right').on( 'click', function() {
            $('.carousel-salon').flickity('next');
        });
        $('.d-content-salon .d-block-left').on( 'click', function() {
            $('.carousel-salon').flickity('previous');
        });
        $('.d-content-text-slider-rooms .d-block-cursor-right').on( 'click', function() {
            $('.carousel-initial').flickity('next');
        });
        $('.d-content-text-slider-rooms .d-block-cursor-left').on( 'click', function() {
            $('.carousel-initial').flickity('previous');
        });
    
        carouselRooms();
        carouselProgramacion();
    });
    
    $(window).resize(function () {
        carouselRooms();
        carouselProgramacion();
    
        /*AOS.init({
            duration: 1000
        });*/
    });
    $(window).on("load", function (e) {
        //carouselRooms();
        //carouselProgramacion();
        /*initMap();*/
    
        /*AOS.init({
            duration: 1000
        });*/
    });
    $(window).scroll(function () {
        scroll();
        /*AOS.init({
            duration: 1000
        });*/
    
        if ($(window).width() > 768) {
            var heightcounter = $(".d-block-slider .carousel-initial .d-block-initial .counter").height() + 15;
            var heighttitle = $(".d-block-slider .carousel-initial .d-block-initial .title").height() + 30;
            var heighttext = $(".d-block-slider .carousel-initial .d-block-initial .text").height() + 30;
            var heighttextsmall = $(".d-block-slider .carousel-initial .d-block-initial .text-small").height() + 10;
            var heightunderline = $(".d-block-slider .carousel-initial .d-block-initial .underline").height() + 45;
            var heightimg = $(".d-block-slider .carousel-initial .d-block-initial .d-block-img").height() + 35;
            var heightblock = heighttitle + heightcounter + heighttext + heightunderline + heightimg + heighttextsmall + 75;
            $(".d-block-slider .carousel-initial .d-block-initial").css("height", heightblock);
            $(".d-block-slider .carousel-initial > .flickity-viewport").css("height", heightblock);
    
            var heightblock2 = $(".d-block-slider .carousel-slider .d-block-img.img-1").height();
            $(".d-block-slider .carousel-slider .carousel-cell").css("height", heightblock2 + 85);
            $(".d-block-slider .carousel-slider > .flickity-viewport").css("height", heightblock2 + 85);
    
            var heightblock3 = $(".d-block-slider .carousel-rooms .d-block-img").height();
            $(".d-block-slider .carousel-rooms .carousel-cell").css("height", heightblock3);
            $(".d-block-slider .carousel-rooms > .flickity-viewport").css("height", heightblock3);
        }
        if ($(window).width() <= 768) {
            var heightcounter = $(".d-block-slider .carousel-initial .d-block-initial .counter").height() + 20;
            var heighttitle = $(".d-block-slider .carousel-initial .d-block-initial .title").height() + 35;
            var heighttext = $(".d-block-slider .carousel-initial .d-block-initial .text").height() + 35;
            var heighttextsmall = $(".d-block-slider .carousel-initial .d-block-initial .text-small").height() + 15;
            var heightunderline = $(".d-block-slider .carousel-initial .d-block-initial .underline").height() + 45;
            var heightimg = $(".d-block-slider .carousel-initial .d-block-initial .d-block-img").height() + 35;
            var heightblock = heighttitle + heightcounter + heighttext + heightunderline + heightimg + heighttextsmall + 145;
            $(".d-block-slider .carousel-initial .d-block-initial").css("height", heightblock);
            $(".d-block-slider .carousel-initial > .flickity-viewport").css("height", heightblock);
    
            var heightblocktext2 = $(".d-block-slider .carousel-slider .d-block-text").height();
            var heightimg2 = $(".d-block-slider .carousel-slider .d-block-img.img-1").height();
            var heightblock2 = heightblocktext2 + heightimg2;
            $(".d-block-slider .carousel-slider .carousel-cell").css("height", heightblock2 + 40);
            $(".d-block-slider .carousel-slider > .flickity-viewport").css("height", heightblock2 + 40);
    
            var heightblock3 = $(".d-block-slider .carousel-rooms .d-block-text").height();
            $(".d-block-slider .carousel-rooms .carousel-cell").css("height", heightblock3 + 65);
            $(".d-block-slider .carousel-rooms > .flickity-viewport").css("height", heightblock3 + 65);
        }
    });
    
    
    function carouselRooms() {
    
        var text1 = $(".carousel-rooms .carousel-cell.carousel-1").attr("data-text-id");
        var text2 = $(".carousel-rooms .carousel-cell.carousel-2").attr("data-text-id");
        var text3 = $(".carousel-rooms .carousel-cell.carousel-3").attr("data-text-id");
        var text4 = $(".carousel-rooms .carousel-cell.carousel-4").attr("data-text-id");
        var text5 = $(".carousel-rooms .carousel-cell.carousel-5").attr("data-text-id");
        var text6 = $(".carousel-rooms .carousel-cell.carousel-6").attr("data-text-id");
    
        var lineId = $(".d-slider-rooms .d-block-line").attr("data-line-id");
    
        var $carousel = $('.carousel-rooms');
        $carousel.on( 'select.flickity', function( event, index ) {
            console.log( 'Flickity select ' + index )
    
            var num = $(".carousel-rooms .carousel-cell.is-selected").attr("data-num-id");
            $(".carousel-rooms .counter span").text(num);
    
            if(lineId == "2") {
                if (num == "1") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("2");
                }
                if (num == "2") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("1");
                }
            }
    
            if(lineId == "3") {
                if (num == "1") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("3");
                }
                if (num == "2") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("1");
                }
                if (num == "3") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("2");
                }
            }
    
            if(lineId == "4") {
                if (num == "1") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("4");
                }
                if (num == "2") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("4");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("1");
                }
                if (num == "3") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("4");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("2");
                }
                if (num == "4") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("3");
                }
            }
    
            if(lineId == "5") {
                if (num == "1") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-5 .name").text(text5);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("4");
                    $(".d-slider-rooms .block-points .point-5 .counter span").text("5");
                }
                if (num == "2") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text5);
                    $(".d-slider-rooms .block-points .point-5 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("4");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("5");
                    $(".d-slider-rooms .block-points .point-5 .counter span").text("1");
                }
                if (num == "3") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text5);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-5 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("4");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("5");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-5 .counter span").text("2");
                }
                if (num == "4") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text5);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-5 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("5");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-5 .counter span").text("3");
                }
                if (num == "5") {
                    $(".d-slider-rooms .block-points .point-2 .name").text(text1);
                    $(".d-slider-rooms .block-points .point-3 .name").text(text2);
                    $(".d-slider-rooms .block-points .point-4 .name").text(text3);
                    $(".d-slider-rooms .block-points .point-5 .name").text(text4);
                    $(".d-slider-rooms .block-points .point-2 .counter span").text("1");
                    $(".d-slider-rooms .block-points .point-3 .counter span").text("2");
                    $(".d-slider-rooms .block-points .point-4 .counter span").text("3");
                    $(".d-slider-rooms .block-points .point-5 .counter span").text("4");
                }
            }
    
        });
    
    }
    
    function carouselProgramacion() {
    
        var text1 = $(".carousel-slider .carousel-cell.carousel-1").attr("data-text-id");
        var text2 = $(".carousel-slider .carousel-cell.carousel-2").attr("data-text-id");
        var text3 = $(".carousel-slider .carousel-cell.carousel-3").attr("data-text-id");
        var text4 = $(".carousel-slider .carousel-cell.carousel-4").attr("data-text-id");
        var text5 = $(".carousel-slider .carousel-cell.carousel-5").attr("data-text-id");
        var text6 = $(".carousel-slider .carousel-cell.carousel-6").attr("data-text-id");
        var text7 = $(".carousel-slider .carousel-cell.carousel-7").attr("data-text-id");
        var text8 = $(".carousel-slider .carousel-cell.carousel-8").attr("data-text-id");
        var text9 = $(".carousel-slider .carousel-cell.carousel-9").attr("data-text-id");
        var text10 = $(".carousel-slider .carousel-cell.carousel-10").attr("data-text-id");
        var text11 = $(".carousel-slider .carousel-cell.carousel-11").attr("data-text-id");
        var text12 = $(".carousel-slider .carousel-cell.carousel-12").attr("data-text-id");
    
        var time1 = $(".carousel-slider .carousel-cell.carousel-1").attr("data-time-id");
        var time2 = $(".carousel-slider .carousel-cell.carousel-2").attr("data-time-id");
        var time3 = $(".carousel-slider .carousel-cell.carousel-3").attr("data-time-id");
        var time4 = $(".carousel-slider .carousel-cell.carousel-4").attr("data-time-id");
        var time5 = $(".carousel-slider .carousel-cell.carousel-5").attr("data-time-id");
        var time6 = $(".carousel-slider .carousel-cell.carousel-6").attr("data-time-id");
        var time7 = $(".carousel-slider .carousel-cell.carousel-7").attr("data-time-id");
        var time8 = $(".carousel-slider .carousel-cell.carousel-8").attr("data-time-id");
        var time9 = $(".carousel-slider .carousel-cell.carousel-9").attr("data-time-id");
        var time10 = $(".carousel-slider .carousel-cell.carousel-10").attr("data-time-id");
        var time11 = $(".carousel-slider .carousel-cell.carousel-11").attr("data-time-id");
        var time12 = $(".carousel-slider .carousel-cell.carousel-12").attr("data-time-id");
    
        var lineId = $(".d-slider .d-block-line").attr("data-line-id");
    
        var $carousel = $('.carousel-slider');
        $carousel.on( 'select.flickity', function( event, index ) {
            console.log( 'Flickity select ' + index )
    
            var num = $(".carousel-slider .carousel-cell.is-selected").attr("data-num-id");
    
            if(lineId == "2") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                }
            }
            if(lineId == "3") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                }
            }
            if(lineId == "4") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                }
            }
            if(lineId == "5") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                }
            }
            if(lineId == "6") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                }
            }
            if(lineId == "7") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                }
            }
            if(lineId == "8") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-8 .name").text(text8);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                    $(".d-slider .block-points .point-8 .counter").text(time8);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text8);
                    $(".d-slider .block-points .point-8 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time8);
                    $(".d-slider .block-points .point-8 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text8);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-8 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time8);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                    $(".d-slider .block-points .point-8 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text8);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-8 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time8);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                    $(".d-slider .block-points .point-8 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text8);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-8 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time8);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                    $(".d-slider .block-points .point-8 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text8);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-8 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time8);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                    $(".d-slider .block-points .point-8 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text8);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-8 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time8);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                    $(".d-slider .block-points .point-8 .counter").text(time6);
                }
                if (num == "8") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-8 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                    $(".d-slider .block-points .point-8 .counter").text(time7);
                }
            }
            if(lineId == "9") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-8 .name").text(text8);
                    $(".d-slider .block-points .point-9 .name").text(text9);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                    $(".d-slider .block-points .point-8 .counter").text(time8);
                    $(".d-slider .block-points .point-9 .counter").text(time9);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text8);
                    $(".d-slider .block-points .point-8 .name").text(text9);
                    $(".d-slider .block-points .point-9 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time8);
                    $(".d-slider .block-points .point-8 .counter").text(time9);
                    $(".d-slider .block-points .point-9 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text8);
                    $(".d-slider .block-points .point-7 .name").text(text9);
                    $(".d-slider .block-points .point-8 .name").text(text1);
                    $(".d-slider .block-points .point-9 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time8);
                    $(".d-slider .block-points .point-7 .counter").text(time9);
                    $(".d-slider .block-points .point-8 .counter").text(time1);
                    $(".d-slider .block-points .point-9 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text8);
                    $(".d-slider .block-points .point-6 .name").text(text9);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-8 .name").text(text2);
                    $(".d-slider .block-points .point-9 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time8);
                    $(".d-slider .block-points .point-6 .counter").text(time9);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                    $(".d-slider .block-points .point-8 .counter").text(time2);
                    $(".d-slider .block-points .point-9 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text8);
                    $(".d-slider .block-points .point-5 .name").text(text9);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-8 .name").text(text3);
                    $(".d-slider .block-points .point-9 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time8);
                    $(".d-slider .block-points .point-5 .counter").text(time9);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                    $(".d-slider .block-points .point-8 .counter").text(time3);
                    $(".d-slider .block-points .point-9 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text8);
                    $(".d-slider .block-points .point-4 .name").text(text9);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-8 .name").text(text4);
                    $(".d-slider .block-points .point-9 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time8);
                    $(".d-slider .block-points .point-4 .counter").text(time9);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                    $(".d-slider .block-points .point-8 .counter").text(time4);
                    $(".d-slider .block-points .point-9 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text8);
                    $(".d-slider .block-points .point-3 .name").text(text9);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-8 .name").text(text5);
                    $(".d-slider .block-points .point-9 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time8);
                    $(".d-slider .block-points .point-3 .counter").text(time9);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                    $(".d-slider .block-points .point-8 .counter").text(time5);
                    $(".d-slider .block-points .point-9 .counter").text(time6);
                }
                if (num == "8") {
                    $(".d-slider .block-points .point-2 .name").text(text9);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-8 .name").text(text6);
                    $(".d-slider .block-points .point-9 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time9);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                    $(".d-slider .block-points .point-8 .counter").text(time6);
                    $(".d-slider .block-points .point-9 .counter").text(time7);
                }
                if (num == "9") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-8 .name").text(text7);
                    $(".d-slider .block-points .point-9 .name").text(text8);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                    $(".d-slider .block-points .point-8 .counter").text(time7);
                    $(".d-slider .block-points .point-9 .counter").text(time8);
                }
            }
            if(lineId == "10") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-8 .name").text(text8);
                    $(".d-slider .block-points .point-9 .name").text(text9);
                    $(".d-slider .block-points .point-10 .name").text(text10);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                    $(".d-slider .block-points .point-8 .counter").text(time8);
                    $(".d-slider .block-points .point-9 .counter").text(time9);
                    $(".d-slider .block-points .point-10 .counter").text(time10);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text8);
                    $(".d-slider .block-points .point-8 .name").text(text9);
                    $(".d-slider .block-points .point-9 .name").text(text10);
                    $(".d-slider .block-points .point-10 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time8);
                    $(".d-slider .block-points .point-8 .counter").text(time9);
                    $(".d-slider .block-points .point-9 .counter").text(time10);
                    $(".d-slider .block-points .point-10 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text8);
                    $(".d-slider .block-points .point-7 .name").text(text9);
                    $(".d-slider .block-points .point-8 .name").text(text10);
                    $(".d-slider .block-points .point-9 .name").text(text1);
                    $(".d-slider .block-points .point-10 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time8);
                    $(".d-slider .block-points .point-7 .counter").text(time9);
                    $(".d-slider .block-points .point-8 .counter").text(time10);
                    $(".d-slider .block-points .point-9 .counter").text(time1);
                    $(".d-slider .block-points .point-10 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text8);
                    $(".d-slider .block-points .point-6 .name").text(text9);
                    $(".d-slider .block-points .point-7 .name").text(text10);
                    $(".d-slider .block-points .point-8 .name").text(text1);
                    $(".d-slider .block-points .point-9 .name").text(text2);
                    $(".d-slider .block-points .point-10 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time8);
                    $(".d-slider .block-points .point-6 .counter").text(time9);
                    $(".d-slider .block-points .point-7 .counter").text(time10);
                    $(".d-slider .block-points .point-8 .counter").text(time1);
                    $(".d-slider .block-points .point-9 .counter").text(time2);
                    $(".d-slider .block-points .point-10 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text8);
                    $(".d-slider .block-points .point-5 .name").text(text9);
                    $(".d-slider .block-points .point-6 .name").text(text10);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-8 .name").text(text2);
                    $(".d-slider .block-points .point-9 .name").text(text3);
                    $(".d-slider .block-points .point-10 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time8);
                    $(".d-slider .block-points .point-5 .counter").text(time9);
                    $(".d-slider .block-points .point-6 .counter").text(time10);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                    $(".d-slider .block-points .point-8 .counter").text(time2);
                    $(".d-slider .block-points .point-9 .counter").text(time3);
                    $(".d-slider .block-points .point-10 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text8);
                    $(".d-slider .block-points .point-4 .name").text(text9);
                    $(".d-slider .block-points .point-5 .name").text(text10);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-8 .name").text(text3);
                    $(".d-slider .block-points .point-9 .name").text(text4);
                    $(".d-slider .block-points .point-10 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time8);
                    $(".d-slider .block-points .point-4 .counter").text(time9);
                    $(".d-slider .block-points .point-5 .counter").text(time10);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                    $(".d-slider .block-points .point-8 .counter").text(time3);
                    $(".d-slider .block-points .point-9 .counter").text(time4);
                    $(".d-slider .block-points .point-10 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text8);
                    $(".d-slider .block-points .point-3 .name").text(text9);
                    $(".d-slider .block-points .point-4 .name").text(text10);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-8 .name").text(text4);
                    $(".d-slider .block-points .point-9 .name").text(text5);
                    $(".d-slider .block-points .point-10 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time8);
                    $(".d-slider .block-points .point-3 .counter").text(time9);
                    $(".d-slider .block-points .point-4 .counter").text(time10);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                    $(".d-slider .block-points .point-8 .counter").text(time4);
                    $(".d-slider .block-points .point-9 .counter").text(time5);
                    $(".d-slider .block-points .point-10 .counter").text(time6);
                }
                if (num == "8") {
                    $(".d-slider .block-points .point-2 .name").text(text9);
                    $(".d-slider .block-points .point-3 .name").text(text10);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-8 .name").text(text5);
                    $(".d-slider .block-points .point-9 .name").text(text6);
                    $(".d-slider .block-points .point-10 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time9);
                    $(".d-slider .block-points .point-3 .counter").text(time10);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                    $(".d-slider .block-points .point-8 .counter").text(time5);
                    $(".d-slider .block-points .point-9 .counter").text(time6);
                    $(".d-slider .block-points .point-10 .counter").text(time7);
                }
                if (num == "9") {
                    $(".d-slider .block-points .point-2 .name").text(text10);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-8 .name").text(text6);
                    $(".d-slider .block-points .point-9 .name").text(text7);
                    $(".d-slider .block-points .point-10 .name").text(text8);
                    $(".d-slider .block-points .point-2 .counter").text(time10);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                    $(".d-slider .block-points .point-8 .counter").text(time6);
                    $(".d-slider .block-points .point-9 .counter").text(time7);
                    $(".d-slider .block-points .point-10 .counter").text(time8);
                }
                if (num == "10") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-8 .name").text(text7);
                    $(".d-slider .block-points .point-9 .name").text(text8);
                    $(".d-slider .block-points .point-10 .name").text(text9);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                    $(".d-slider .block-points .point-8 .counter").text(time7);
                    $(".d-slider .block-points .point-9 .counter").text(time8);
                    $(".d-slider .block-points .point-10 .counter").text(time9);
                }
            }
            if(lineId == "11") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-8 .name").text(text8);
                    $(".d-slider .block-points .point-9 .name").text(text9);
                    $(".d-slider .block-points .point-10 .name").text(text10);
                    $(".d-slider .block-points .point-11 .name").text(text11);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                    $(".d-slider .block-points .point-8 .counter").text(time8);
                    $(".d-slider .block-points .point-9 .counter").text(time9);
                    $(".d-slider .block-points .point-10 .counter").text(time10);
                    $(".d-slider .block-points .point-11 .counter").text(time11);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text8);
                    $(".d-slider .block-points .point-8 .name").text(text9);
                    $(".d-slider .block-points .point-9 .name").text(text10);
                    $(".d-slider .block-points .point-10 .name").text(text11);
                    $(".d-slider .block-points .point-11 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time8);
                    $(".d-slider .block-points .point-8 .counter").text(time9);
                    $(".d-slider .block-points .point-9 .counter").text(time10);
                    $(".d-slider .block-points .point-10 .counter").text(time11);
                    $(".d-slider .block-points .point-11 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text8);
                    $(".d-slider .block-points .point-7 .name").text(text9);
                    $(".d-slider .block-points .point-8 .name").text(text10);
                    $(".d-slider .block-points .point-9 .name").text(text11);
                    $(".d-slider .block-points .point-10 .name").text(text1);
                    $(".d-slider .block-points .point-11 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time8);
                    $(".d-slider .block-points .point-7 .counter").text(time9);
                    $(".d-slider .block-points .point-8 .counter").text(time10);
                    $(".d-slider .block-points .point-9 .counter").text(time11);
                    $(".d-slider .block-points .point-10 .counter").text(time1);
                    $(".d-slider .block-points .point-11 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text8);
                    $(".d-slider .block-points .point-6 .name").text(text9);
                    $(".d-slider .block-points .point-7 .name").text(text10);
                    $(".d-slider .block-points .point-8 .name").text(text11);
                    $(".d-slider .block-points .point-9 .name").text(text1);
                    $(".d-slider .block-points .point-10 .name").text(text2);
                    $(".d-slider .block-points .point-11 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time8);
                    $(".d-slider .block-points .point-6 .counter").text(time9);
                    $(".d-slider .block-points .point-7 .counter").text(time10);
                    $(".d-slider .block-points .point-8 .counter").text(time11);
                    $(".d-slider .block-points .point-9 .counter").text(time1);
                    $(".d-slider .block-points .point-10 .counter").text(time2);
                    $(".d-slider .block-points .point-11 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text8);
                    $(".d-slider .block-points .point-5 .name").text(text9);
                    $(".d-slider .block-points .point-6 .name").text(text10);
                    $(".d-slider .block-points .point-7 .name").text(text11);
                    $(".d-slider .block-points .point-8 .name").text(text1);
                    $(".d-slider .block-points .point-9 .name").text(text2);
                    $(".d-slider .block-points .point-10 .name").text(text3);
                    $(".d-slider .block-points .point-11 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time8);
                    $(".d-slider .block-points .point-5 .counter").text(time9);
                    $(".d-slider .block-points .point-6 .counter").text(time10);
                    $(".d-slider .block-points .point-7 .counter").text(time11);
                    $(".d-slider .block-points .point-8 .counter").text(time1);
                    $(".d-slider .block-points .point-9 .counter").text(time2);
                    $(".d-slider .block-points .point-10 .counter").text(time3);
                    $(".d-slider .block-points .point-11 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text8);
                    $(".d-slider .block-points .point-4 .name").text(text9);
                    $(".d-slider .block-points .point-5 .name").text(text10);
                    $(".d-slider .block-points .point-6 .name").text(text11);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-8 .name").text(text2);
                    $(".d-slider .block-points .point-9 .name").text(text3);
                    $(".d-slider .block-points .point-10 .name").text(text4);
                    $(".d-slider .block-points .point-11 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time8);
                    $(".d-slider .block-points .point-4 .counter").text(time9);
                    $(".d-slider .block-points .point-5 .counter").text(time10);
                    $(".d-slider .block-points .point-6 .counter").text(time11);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                    $(".d-slider .block-points .point-8 .counter").text(time2);
                    $(".d-slider .block-points .point-9 .counter").text(time3);
                    $(".d-slider .block-points .point-10 .counter").text(time4);
                    $(".d-slider .block-points .point-11 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text8);
                    $(".d-slider .block-points .point-3 .name").text(text9);
                    $(".d-slider .block-points .point-4 .name").text(text10);
                    $(".d-slider .block-points .point-5 .name").text(text11);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-8 .name").text(text3);
                    $(".d-slider .block-points .point-9 .name").text(text4);
                    $(".d-slider .block-points .point-10 .name").text(text5);
                    $(".d-slider .block-points .point-11 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time8);
                    $(".d-slider .block-points .point-3 .counter").text(time9);
                    $(".d-slider .block-points .point-4 .counter").text(time10);
                    $(".d-slider .block-points .point-5 .counter").text(time11);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                    $(".d-slider .block-points .point-8 .counter").text(time3);
                    $(".d-slider .block-points .point-9 .counter").text(time4);
                    $(".d-slider .block-points .point-10 .counter").text(time5);
                    $(".d-slider .block-points .point-11 .counter").text(time6);
                }
                if (num == "8") {
                    $(".d-slider .block-points .point-2 .name").text(text9);
                    $(".d-slider .block-points .point-3 .name").text(text10);
                    $(".d-slider .block-points .point-4 .name").text(text11);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-8 .name").text(text4);
                    $(".d-slider .block-points .point-9 .name").text(text5);
                    $(".d-slider .block-points .point-10 .name").text(text6);
                    $(".d-slider .block-points .point-11 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time9);
                    $(".d-slider .block-points .point-3 .counter").text(time10);
                    $(".d-slider .block-points .point-4 .counter").text(time11);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                    $(".d-slider .block-points .point-8 .counter").text(time4);
                    $(".d-slider .block-points .point-9 .counter").text(time5);
                    $(".d-slider .block-points .point-10 .counter").text(time6);
                    $(".d-slider .block-points .point-11 .counter").text(time7);
                }
                if (num == "9") {
                    $(".d-slider .block-points .point-2 .name").text(text10);
                    $(".d-slider .block-points .point-3 .name").text(text11);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-8 .name").text(text5);
                    $(".d-slider .block-points .point-9 .name").text(text6);
                    $(".d-slider .block-points .point-10 .name").text(text7);
                    $(".d-slider .block-points .point-11 .name").text(text8);
                    $(".d-slider .block-points .point-2 .counter").text(time10);
                    $(".d-slider .block-points .point-3 .counter").text(time11);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                    $(".d-slider .block-points .point-8 .counter").text(time5);
                    $(".d-slider .block-points .point-9 .counter").text(time6);
                    $(".d-slider .block-points .point-10 .counter").text(time7);
                    $(".d-slider .block-points .point-11 .counter").text(time8);
                }
                if (num == "10") {
                    $(".d-slider .block-points .point-2 .name").text(text11);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-8 .name").text(text6);
                    $(".d-slider .block-points .point-9 .name").text(text7);
                    $(".d-slider .block-points .point-10 .name").text(text8);
                    $(".d-slider .block-points .point-11 .name").text(text9);
                    $(".d-slider .block-points .point-2 .counter").text(time11);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                    $(".d-slider .block-points .point-8 .counter").text(time6);
                    $(".d-slider .block-points .point-9 .counter").text(time7);
                    $(".d-slider .block-points .point-10 .counter").text(time8);
                    $(".d-slider .block-points .point-11 .counter").text(time9);
                }
                if (num == "11") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-8 .name").text(text7);
                    $(".d-slider .block-points .point-9 .name").text(text8);
                    $(".d-slider .block-points .point-10 .name").text(text9);
                    $(".d-slider .block-points .point-11 .name").text(text10);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                    $(".d-slider .block-points .point-8 .counter").text(time7);
                    $(".d-slider .block-points .point-9 .counter").text(time8);
                    $(".d-slider .block-points .point-10 .counter").text(time9);
                    $(".d-slider .block-points .point-11 .counter").text(time10);
                }
            }
            if(lineId == "12") {
                if (num == "1") {
                    $(".d-slider .block-points .point-2 .name").text(text2);
                    $(".d-slider .block-points .point-3 .name").text(text3);
                    $(".d-slider .block-points .point-4 .name").text(text4);
                    $(".d-slider .block-points .point-5 .name").text(text5);
                    $(".d-slider .block-points .point-6 .name").text(text6);
                    $(".d-slider .block-points .point-7 .name").text(text7);
                    $(".d-slider .block-points .point-8 .name").text(text8);
                    $(".d-slider .block-points .point-9 .name").text(text9);
                    $(".d-slider .block-points .point-10 .name").text(text10);
                    $(".d-slider .block-points .point-11 .name").text(text11);
                    $(".d-slider .block-points .point-12 .name").text(text12);
                    $(".d-slider .block-points .point-2 .counter").text(time2);
                    $(".d-slider .block-points .point-3 .counter").text(time3);
                    $(".d-slider .block-points .point-4 .counter").text(time4);
                    $(".d-slider .block-points .point-5 .counter").text(time5);
                    $(".d-slider .block-points .point-6 .counter").text(time6);
                    $(".d-slider .block-points .point-7 .counter").text(time7);
                    $(".d-slider .block-points .point-8 .counter").text(time8);
                    $(".d-slider .block-points .point-9 .counter").text(time9);
                    $(".d-slider .block-points .point-10 .counter").text(time10);
                    $(".d-slider .block-points .point-11 .counter").text(time11);
                    $(".d-slider .block-points .point-12 .counter").text(time12);
                }
                if (num == "2") {
                    $(".d-slider .block-points .point-2 .name").text(text3);
                    $(".d-slider .block-points .point-3 .name").text(text4);
                    $(".d-slider .block-points .point-4 .name").text(text5);
                    $(".d-slider .block-points .point-5 .name").text(text6);
                    $(".d-slider .block-points .point-6 .name").text(text7);
                    $(".d-slider .block-points .point-7 .name").text(text8);
                    $(".d-slider .block-points .point-8 .name").text(text9);
                    $(".d-slider .block-points .point-9 .name").text(text10);
                    $(".d-slider .block-points .point-10 .name").text(text11);
                    $(".d-slider .block-points .point-11 .name").text(text12);
                    $(".d-slider .block-points .point-12 .name").text(text1);
                    $(".d-slider .block-points .point-2 .counter").text(time3);
                    $(".d-slider .block-points .point-3 .counter").text(time4);
                    $(".d-slider .block-points .point-4 .counter").text(time5);
                    $(".d-slider .block-points .point-5 .counter").text(time6);
                    $(".d-slider .block-points .point-6 .counter").text(time7);
                    $(".d-slider .block-points .point-7 .counter").text(time8);
                    $(".d-slider .block-points .point-8 .counter").text(time9);
                    $(".d-slider .block-points .point-9 .counter").text(time10);
                    $(".d-slider .block-points .point-10 .counter").text(time11);
                    $(".d-slider .block-points .point-11 .counter").text(time12);
                    $(".d-slider .block-points .point-12 .counter").text(time1);
                }
                if (num == "3") {
                    $(".d-slider .block-points .point-2 .name").text(text4);
                    $(".d-slider .block-points .point-3 .name").text(text5);
                    $(".d-slider .block-points .point-4 .name").text(text6);
                    $(".d-slider .block-points .point-5 .name").text(text7);
                    $(".d-slider .block-points .point-6 .name").text(text8);
                    $(".d-slider .block-points .point-7 .name").text(text9);
                    $(".d-slider .block-points .point-8 .name").text(text10);
                    $(".d-slider .block-points .point-9 .name").text(text11);
                    $(".d-slider .block-points .point-10 .name").text(text12);
                    $(".d-slider .block-points .point-11 .name").text(text1);
                    $(".d-slider .block-points .point-12 .name").text(text2);
                    $(".d-slider .block-points .point-2 .counter").text(time4);
                    $(".d-slider .block-points .point-3 .counter").text(time5);
                    $(".d-slider .block-points .point-4 .counter").text(time6);
                    $(".d-slider .block-points .point-5 .counter").text(time7);
                    $(".d-slider .block-points .point-6 .counter").text(time8);
                    $(".d-slider .block-points .point-7 .counter").text(time9);
                    $(".d-slider .block-points .point-8 .counter").text(time10);
                    $(".d-slider .block-points .point-9 .counter").text(time11);
                    $(".d-slider .block-points .point-10 .counter").text(time12);
                    $(".d-slider .block-points .point-11 .counter").text(time1);
                    $(".d-slider .block-points .point-12 .counter").text(time2);
                }
                if (num == "4") {
                    $(".d-slider .block-points .point-2 .name").text(text5);
                    $(".d-slider .block-points .point-3 .name").text(text6);
                    $(".d-slider .block-points .point-4 .name").text(text7);
                    $(".d-slider .block-points .point-5 .name").text(text8);
                    $(".d-slider .block-points .point-6 .name").text(text9);
                    $(".d-slider .block-points .point-7 .name").text(text10);
                    $(".d-slider .block-points .point-8 .name").text(text11);
                    $(".d-slider .block-points .point-9 .name").text(text12);
                    $(".d-slider .block-points .point-10 .name").text(text1);
                    $(".d-slider .block-points .point-11 .name").text(text2);
                    $(".d-slider .block-points .point-12 .name").text(text3);
                    $(".d-slider .block-points .point-2 .counter").text(time5);
                    $(".d-slider .block-points .point-3 .counter").text(time6);
                    $(".d-slider .block-points .point-4 .counter").text(time7);
                    $(".d-slider .block-points .point-5 .counter").text(time8);
                    $(".d-slider .block-points .point-6 .counter").text(time9);
                    $(".d-slider .block-points .point-7 .counter").text(time10);
                    $(".d-slider .block-points .point-8 .counter").text(time11);
                    $(".d-slider .block-points .point-9 .counter").text(time12);
                    $(".d-slider .block-points .point-10 .counter").text(time1);
                    $(".d-slider .block-points .point-11 .counter").text(time2);
                    $(".d-slider .block-points .point-12 .counter").text(time3);
                }
                if (num == "5") {
                    $(".d-slider .block-points .point-2 .name").text(text6);
                    $(".d-slider .block-points .point-3 .name").text(text7);
                    $(".d-slider .block-points .point-4 .name").text(text8);
                    $(".d-slider .block-points .point-5 .name").text(text9);
                    $(".d-slider .block-points .point-6 .name").text(text10);
                    $(".d-slider .block-points .point-7 .name").text(text11);
                    $(".d-slider .block-points .point-8 .name").text(text12);
                    $(".d-slider .block-points .point-9 .name").text(text1);
                    $(".d-slider .block-points .point-10 .name").text(text2);
                    $(".d-slider .block-points .point-11 .name").text(text3);
                    $(".d-slider .block-points .point-12 .name").text(text4);
                    $(".d-slider .block-points .point-2 .counter").text(time6);
                    $(".d-slider .block-points .point-3 .counter").text(time7);
                    $(".d-slider .block-points .point-4 .counter").text(time8);
                    $(".d-slider .block-points .point-5 .counter").text(time9);
                    $(".d-slider .block-points .point-6 .counter").text(time10);
                    $(".d-slider .block-points .point-7 .counter").text(time11);
                    $(".d-slider .block-points .point-8 .counter").text(time12);
                    $(".d-slider .block-points .point-9 .counter").text(time1);
                    $(".d-slider .block-points .point-10 .counter").text(time2);
                    $(".d-slider .block-points .point-11 .counter").text(time3);
                    $(".d-slider .block-points .point-12 .counter").text(time4);
                }
                if (num == "6") {
                    $(".d-slider .block-points .point-2 .name").text(text7);
                    $(".d-slider .block-points .point-3 .name").text(text8);
                    $(".d-slider .block-points .point-4 .name").text(text9);
                    $(".d-slider .block-points .point-5 .name").text(text10);
                    $(".d-slider .block-points .point-6 .name").text(text11);
                    $(".d-slider .block-points .point-7 .name").text(text12);
                    $(".d-slider .block-points .point-8 .name").text(text1);
                    $(".d-slider .block-points .point-9 .name").text(text2);
                    $(".d-slider .block-points .point-10 .name").text(text3);
                    $(".d-slider .block-points .point-11 .name").text(text4);
                    $(".d-slider .block-points .point-12 .name").text(text5);
                    $(".d-slider .block-points .point-2 .counter").text(time7);
                    $(".d-slider .block-points .point-3 .counter").text(time8);
                    $(".d-slider .block-points .point-4 .counter").text(time9);
                    $(".d-slider .block-points .point-5 .counter").text(time10);
                    $(".d-slider .block-points .point-6 .counter").text(time11);
                    $(".d-slider .block-points .point-7 .counter").text(time12);
                    $(".d-slider .block-points .point-8 .counter").text(time1);
                    $(".d-slider .block-points .point-9 .counter").text(time2);
                    $(".d-slider .block-points .point-10 .counter").text(time3);
                    $(".d-slider .block-points .point-11 .counter").text(time4);
                    $(".d-slider .block-points .point-12 .counter").text(time5);
                }
                if (num == "7") {
                    $(".d-slider .block-points .point-2 .name").text(text8);
                    $(".d-slider .block-points .point-3 .name").text(text9);
                    $(".d-slider .block-points .point-4 .name").text(text10);
                    $(".d-slider .block-points .point-5 .name").text(text11);
                    $(".d-slider .block-points .point-6 .name").text(text12);
                    $(".d-slider .block-points .point-7 .name").text(text1);
                    $(".d-slider .block-points .point-8 .name").text(text2);
                    $(".d-slider .block-points .point-9 .name").text(text3);
                    $(".d-slider .block-points .point-10 .name").text(text4);
                    $(".d-slider .block-points .point-11 .name").text(text5);
                    $(".d-slider .block-points .point-12 .name").text(text6);
                    $(".d-slider .block-points .point-2 .counter").text(time8);
                    $(".d-slider .block-points .point-3 .counter").text(time9);
                    $(".d-slider .block-points .point-4 .counter").text(time10);
                    $(".d-slider .block-points .point-5 .counter").text(time11);
                    $(".d-slider .block-points .point-6 .counter").text(time12);
                    $(".d-slider .block-points .point-7 .counter").text(time1);
                    $(".d-slider .block-points .point-8 .counter").text(time2);
                    $(".d-slider .block-points .point-9 .counter").text(time3);
                    $(".d-slider .block-points .point-10 .counter").text(time4);
                    $(".d-slider .block-points .point-11 .counter").text(time5);
                    $(".d-slider .block-points .point-12 .counter").text(time6);
                }
                if (num == "8") {
                    $(".d-slider .block-points .point-2 .name").text(text9);
                    $(".d-slider .block-points .point-3 .name").text(text10);
                    $(".d-slider .block-points .point-4 .name").text(text11);
                    $(".d-slider .block-points .point-5 .name").text(text12);
                    $(".d-slider .block-points .point-6 .name").text(text1);
                    $(".d-slider .block-points .point-7 .name").text(text2);
                    $(".d-slider .block-points .point-8 .name").text(text3);
                    $(".d-slider .block-points .point-9 .name").text(text4);
                    $(".d-slider .block-points .point-10 .name").text(text5);
                    $(".d-slider .block-points .point-11 .name").text(text6);
                    $(".d-slider .block-points .point-12 .name").text(text7);
                    $(".d-slider .block-points .point-2 .counter").text(time9);
                    $(".d-slider .block-points .point-3 .counter").text(time10);
                    $(".d-slider .block-points .point-4 .counter").text(time11);
                    $(".d-slider .block-points .point-5 .counter").text(time12);
                    $(".d-slider .block-points .point-6 .counter").text(time1);
                    $(".d-slider .block-points .point-7 .counter").text(time2);
                    $(".d-slider .block-points .point-8 .counter").text(time3);
                    $(".d-slider .block-points .point-9 .counter").text(time4);
                    $(".d-slider .block-points .point-10 .counter").text(time5);
                    $(".d-slider .block-points .point-11 .counter").text(time6);
                    $(".d-slider .block-points .point-12 .counter").text(time7);
                }
                if (num == "9") {
                    $(".d-slider .block-points .point-2 .name").text(text10);
                    $(".d-slider .block-points .point-3 .name").text(text11);
                    $(".d-slider .block-points .point-4 .name").text(text12);
                    $(".d-slider .block-points .point-5 .name").text(text1);
                    $(".d-slider .block-points .point-6 .name").text(text2);
                    $(".d-slider .block-points .point-7 .name").text(text3);
                    $(".d-slider .block-points .point-8 .name").text(text4);
                    $(".d-slider .block-points .point-9 .name").text(text5);
                    $(".d-slider .block-points .point-10 .name").text(text6);
                    $(".d-slider .block-points .point-11 .name").text(text7);
                    $(".d-slider .block-points .point-12 .name").text(text8);
                    $(".d-slider .block-points .point-2 .counter").text(time10);
                    $(".d-slider .block-points .point-3 .counter").text(time11);
                    $(".d-slider .block-points .point-4 .counter").text(time12);
                    $(".d-slider .block-points .point-5 .counter").text(time1);
                    $(".d-slider .block-points .point-6 .counter").text(time2);
                    $(".d-slider .block-points .point-7 .counter").text(time3);
                    $(".d-slider .block-points .point-8 .counter").text(time4);
                    $(".d-slider .block-points .point-9 .counter").text(time5);
                    $(".d-slider .block-points .point-10 .counter").text(time6);
                    $(".d-slider .block-points .point-11 .counter").text(time7);
                    $(".d-slider .block-points .point-12 .counter").text(time8);
                }
                if (num == "10") {
                    $(".d-slider .block-points .point-2 .name").text(text11);
                    $(".d-slider .block-points .point-3 .name").text(text12);
                    $(".d-slider .block-points .point-4 .name").text(text1);
                    $(".d-slider .block-points .point-5 .name").text(text2);
                    $(".d-slider .block-points .point-6 .name").text(text3);
                    $(".d-slider .block-points .point-7 .name").text(text4);
                    $(".d-slider .block-points .point-8 .name").text(text5);
                    $(".d-slider .block-points .point-9 .name").text(text6);
                    $(".d-slider .block-points .point-10 .name").text(text7);
                    $(".d-slider .block-points .point-11 .name").text(text8);
                    $(".d-slider .block-points .point-12 .name").text(text9);
                    $(".d-slider .block-points .point-2 .counter").text(time11);
                    $(".d-slider .block-points .point-3 .counter").text(time12);
                    $(".d-slider .block-points .point-4 .counter").text(time1);
                    $(".d-slider .block-points .point-5 .counter").text(time2);
                    $(".d-slider .block-points .point-6 .counter").text(time3);
                    $(".d-slider .block-points .point-7 .counter").text(time4);
                    $(".d-slider .block-points .point-8 .counter").text(time5);
                    $(".d-slider .block-points .point-9 .counter").text(time6);
                    $(".d-slider .block-points .point-10 .counter").text(time7);
                    $(".d-slider .block-points .point-11 .counter").text(time8);
                    $(".d-slider .block-points .point-12 .counter").text(time9);
                }
                if (num == "11") {
                    $(".d-slider .block-points .point-2 .name").text(text12);
                    $(".d-slider .block-points .point-3 .name").text(text1);
                    $(".d-slider .block-points .point-4 .name").text(text2);
                    $(".d-slider .block-points .point-5 .name").text(text3);
                    $(".d-slider .block-points .point-6 .name").text(text4);
                    $(".d-slider .block-points .point-7 .name").text(text5);
                    $(".d-slider .block-points .point-8 .name").text(text6);
                    $(".d-slider .block-points .point-9 .name").text(text7);
                    $(".d-slider .block-points .point-10 .name").text(text8);
                    $(".d-slider .block-points .point-11 .name").text(text9);
                    $(".d-slider .block-points .point-12 .name").text(text10);
                    $(".d-slider .block-points .point-2 .counter").text(time12);
                    $(".d-slider .block-points .point-3 .counter").text(time1);
                    $(".d-slider .block-points .point-4 .counter").text(time2);
                    $(".d-slider .block-points .point-5 .counter").text(time3);
                    $(".d-slider .block-points .point-6 .counter").text(time4);
                    $(".d-slider .block-points .point-7 .counter").text(time5);
                    $(".d-slider .block-points .point-8 .counter").text(time6);
                    $(".d-slider .block-points .point-9 .counter").text(time7);
                    $(".d-slider .block-points .point-10 .counter").text(time8);
                    $(".d-slider .block-points .point-11 .counter").text(time9);
                    $(".d-slider .block-points .point-12 .counter").text(time10);
                }
                if (num == "12") {
                    $(".d-slider .block-points .point-2 .name").text(text1);
                    $(".d-slider .block-points .point-3 .name").text(text2);
                    $(".d-slider .block-points .point-4 .name").text(text3);
                    $(".d-slider .block-points .point-5 .name").text(text4);
                    $(".d-slider .block-points .point-6 .name").text(text5);
                    $(".d-slider .block-points .point-7 .name").text(text6);
                    $(".d-slider .block-points .point-8 .name").text(text7);
                    $(".d-slider .block-points .point-9 .name").text(text8);
                    $(".d-slider .block-points .point-10 .name").text(text9);
                    $(".d-slider .block-points .point-11 .name").text(text10);
                    $(".d-slider .block-points .point-12 .name").text(text11);
                    $(".d-slider .block-points .point-2 .counter").text(time1);
                    $(".d-slider .block-points .point-3 .counter").text(time2);
                    $(".d-slider .block-points .point-4 .counter").text(time3);
                    $(".d-slider .block-points .point-5 .counter").text(time4);
                    $(".d-slider .block-points .point-6 .counter").text(time5);
                    $(".d-slider .block-points .point-7 .counter").text(time6);
                    $(".d-slider .block-points .point-8 .counter").text(time7);
                    $(".d-slider .block-points .point-9 .counter").text(time8);
                    $(".d-slider .block-points .point-10 .counter").text(time9);
                    $(".d-slider .block-points .point-11 .counter").text(time10);
                    $(".d-slider .block-points .point-12 .counter").text(time11);
                }
            }
        });
    }
    
    function scroll() {
        if ($(document).scrollTop() > 100) {
            $(".navbar").addClass("scroll");
        }
        if ($(document).scrollTop() < 100) {
            $(".navbar").removeClass("scroll");
        }
        if ($(document).scrollTop() > 50) {
            $(".navbar").removeClass("navbar-fixed");
        }
        if ($(document).scrollTop() < 50) {
            $(".navbar").addClass("navbar-fixed");
        }
    }
    
    function getCookie(d) {
        var b = d + "=";
        var a = document.cookie.split(";");
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            while (f.charAt(0) == " ") {
                f = f.substring(1)
            }
            if (f.indexOf(b) == 0) {
                return f.substring(b.length, f.length)
            }
        }
        return ""
    }
    function setCookie(b, f, c) {
        var e = new Date();
        e.setTime(e.getTime() + (c * 24 * 60 * 60 * 1000));
        var a = "expires=" + e.toUTCString();
        document.cookie = b + "=" + f + "; " + a
    }
    function PonerCookie() {
        setCookie("cookieaviso", "1", 365);
        document.getElementById("barraaceptacion").style.display = "none"
    }
    