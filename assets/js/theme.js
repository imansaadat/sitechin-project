$(document).ready(function () {
    /* Modal */
    $('.search-btn').click(function () {
        $('.modal-search').addClass('show-modal');
        $('.layout').addClass('blur');
    });

    $('.close-btn').click(function () {
        $('.modal-search').removeClass('show-modal');
        $('.layout').removeClass('blur');
    });

    /* Customer Carousel */
    // (function () {
    //     var rotate;
    //     rotate = function () {
    //         return $('.card:first-child').fadeOut(0, 'swing', function () {
    //             return $('.card:first-child').appendTo('.layer-3d-carousel').hide();
    //          }).fadeIn(0, 'swing');
    //      };
    //     setInterval(rotate, 6000);
    // }).call(this);

    /* Services Carousel Section */
    var services_carousel_block = new Swiper('.services-carousel-block', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 8000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.services-button-next',
            prevEl: '.services-button-prev',
        },
    });

    /* Wiki Carousel Section */
    var wiki_carousel_post = new Swiper('.wiki-carousel-post', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });

    /* Customer Brand Carousel Section */
    var customer_carousel_post = new Swiper('.customer-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });

    /* Single Demo Page => Gallery */
    var DemogalleryThumbs = new Swiper('.demo-gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 5,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var DemogalleryTop = new Swiper('.demo-gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: DemogalleryThumbs,
        },
    });
});
