
$(document).ready(function() {
	var openPhotoSwipe = function() {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = [
			{
				src: 'firm-1/1.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-1/2.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-1/3.jpg',
				w: 928,
				h: 580
			}
	
		];
		var options = {   
			history: false,
			focus: false,
			closeOnScroll:false,
			showAnimationDuration: 0,
			hideAnimationDuration: 0	
		};
		
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
	};
	document.getElementById('btn').onclick = openPhotoSwipe;
	var openPhotoSwipe_1 = function() {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = [
			{
				src: 'firm-2/1.png',
				w: 928,
				h: 580
			},
			{
				src: 'firm-2/2.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-2/3.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-2/4.png',
				w: 850,
				h: 580
			}
	
		];
		var options = {       
			history: false,
			focus: false,
			closeOnScroll:false,
			showAnimationDuration: 0,
			hideAnimationDuration: 0	
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
	document.getElementById('btn_1').onclick = openPhotoSwipe_1;
	var openPhotoSwipe_2 = function() {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var items = [
			{
				src: 'firm-3/1.png',
				w: 928,
				h: 580
			},
			{
				src: 'firm-3/2.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-3/3.jpg',
				w: 928,
				h: 580
			},
			{
				src: 'firm-3/4.jpg',
				w: 850,
				h: 580
			}
		];
		var options = { 
			history: false,
			focus: false,
			closeOnScroll:false,
			showAnimationDuration: 0,
			hideAnimationDuration: 0
			
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();	
	};
document.getElementById('btn_2').onclick = openPhotoSwipe_2;	
$(".bottom-section__input").click(function () {
$(".section-information").slideToggle("slow")
});	
$('a.open_link').click(function(ev){
	ev.preventDefault()
})
$('.bottom-section__button').on('click','.bottom-section__input',function(){
$(this).toggleClass('bottom-section__inputup');
 });
 function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	function toggleMenu(){
	  menu.toggleClass('burger-menu_active');
	  if (menu.hasClass('burger-menu_active')) {
		$('body').css('overlow', 'hidden');
	  } else {
		$('body').css('overlow', 'visible');
	  }
	}
 }
 burgerMenu('.burger-menu');
	new Swiper ('.swiper-container', {
		slideClass: 'swiper-container__article',
		wrapperClass: 'swiper-container__examples',
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true, 
	
		breakpoints: {
		  1116: {
		slidesPerView: 3,
		spaceBetween: 30,
	   
	  },
	  880: {
		slidesPerView: 3,
		spaceBetween: 30,
	   
	  },
	  700: {
		slidesPerView: 2,
		spaceBetween: 30,
	   
	  },
	  600: {
		slidesPerView: 2,
		spaceBetween: 30,
	   
	  },
	  500: {
		slidesPerView: 2,
		spaceBetween: 25,
	   
	  },
	 
	  480: {
		slidesPerView: 1,
		spaceBetween: 30,
	  },
	  
	  320: {
		slidesPerView: 1,
		spaceBetween: 30,
	  }
	},
		pagination: {
		el: '.swiper-container__swiper-pagination',
		bulletClass: 'swiper',
		bulletActiveClass:'swiper-active',
		type: 'bullets',
		clickable: true,
		},
		

		navigation: {
	   nextEl: '.swiper-container__button-next',
	   prevEl: '.swiper-container__button-prev',
	   },
	})
	  

	  new Swiper ('.slide-container', {
		slideClass: 'section-price__slide',
		wrapperClass: 'price-container__wrapper',
		slidesPerView: 1,
		spaceBetween: 35,
		speed:3000,
		autoplay:{
		  delay:2000,
		  
		},
		loop: true,
	
	    pagination: {
		el: '.price-container__price-pagination',
		bulletClass: 'price-swiper',
		bulletActiveClass:'price-swiper-active',
		type: 'bullets',
		clickable: true,
		}
	})  

$(window).scroll(function(){
	$('.bg_1').bgscroll({
	  direction: 'top', 
	  bgpositionx: 10, 
	  debug: false, 
	  min:0, 
	  max:100 
	});	
  })




})





