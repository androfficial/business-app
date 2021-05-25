$(function() {
	$('.menu__icon').on('click', function() {
	  $(this).toggleClass('_active');
	  $('.menu__list').toggleClass('_active');
	  $('body').toggleClass('_lock');
	});
})
$(function() {
	$('.intro-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		arrows: false,
		dots: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				//arrows: false,
				autoplay: 	   true,
				autoplaySpeed: 4000
			}
		},
		]
	});
})

$(function() {
	$('.blog__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-btn__prev"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick-btn slick-btn__next"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		dots: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				autoplay: true,
				autoplaySpeed: 4000
			}
		},
		]
	});
})
new Swiper('.customers__container-slider', {
	//loop: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
$('.questions__list-item-header').on('click', function(){
	 $(this).toggleClass('_active');
	 $(this).next().toggleClass('_active');
});
$('.menu__link').on('click', function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 80
    }, 600);
});

$('.footer__menu-link').on('click', function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 80
    }, 600);
});