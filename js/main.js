$(function(){
    var mixer = mixitup('.portfolio__content');

    $('.slider-blog__inner').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',

    });



});