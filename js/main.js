$(document).ready(function() {

	/* Модальное окно "Заказать звонок" */
	$('.popup-btn').on('click', function (event){
		event.preventDefault();
		$('.popup-call').fadeIn()
	});
	$('.form-close').on('click', function(event) {
		event.preventDefault();
		$('.popup-call').fadeOut()
	});

	/* Модальное окно "Задать вопрос" */
	$('.popup-question-btn').on('click', function (event){
		event.preventDefault();
		$('.popup-question').fadeIn()
	});
	$('.form-close').on('click', function(event) {
		event.preventDefault();
		$('.popup-question').fadeOut()
	});

	
	$('.popup-order-btn').on('click', function (event){
		event.preventDefault();
		$('.popup-order').fadeIn()
	});
	$('.form-close').on('click', function(event) {
		event.preventDefault();
		$('.popup-order').fadeOut()
	});

	/* Модальное окно "Выбрать комплектацию" */
	$('.popup-equipment-btn').on('click', function (event){
		event.preventDefault();
		$('.popup-equipment').fadeIn()
	});
	$('.form-close').on('click', function(event) {
		event.preventDefault();
		$('.popup-equipment').fadeOut()
	});
});

jQuery(function($){
	$("#phone-call").mask("+7 (999) 999-99-99");
	$("#phone-question").mask("+7 (999) 999-99-99");
	$("#phone-equipment").mask("+7 (999) 999-99-99");
	$("#phone-order-1").mask("+7 (999) 999-99-99");
	$("#phone-order-2").mask("+7 (999) 999-99-99");
	$("#phone-order-3").mask("+7 (999) 999-99-99");
});
var rellax = new Rellax('.rellax');
new WOW().init();
$('form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('.thanks-page').fadeIn();
		$("form").trigger("reset");
	});
	$('.thanks-close').on('click', function(event) {
		event.preventDefault();
		$('.thanks-page').fadeOut()
	});
	return false;
});
$(document).ready(function() {

	$.fn.customSelect = function() {
		$(this).wrap('<div class="select-wrapper">');
		var setActiveElement = function (elem) {
			var $elem = $(elem),
			$option = $elem.find('option:selected');

			$elem.parent().attr('data-select-label', $option.text());
		};

		setActiveElement($(this));

		$(this).on('change', function () {
			setActiveElement($(this));
			$(this).blur();
		});
	};

	$('select').each(function() {
		$(this).customSelect();
	});
});

	// 		/*$('.popup-youtube').magnificPopup({
	// 			type: 'iframe',
	// 			mainClass: 'mfp-fade',
	// 			removalDelay: 160,
	// 			preloader: false,

	// 		});*/
	// 		// Type Iframe - видео Youtube (или Vimeo), карты Гугл или другой контент в iframe
	// 		$('.popup-youtube').magnificPopup({
	// 			type: 'iframe',
	// 			iframe: {
	// 				patterns: {
	// 					youtube: {
	// 		     index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
	// 		     id: 'watch?v=', // String that splits URL in a two parts, second part should be %id%
	// 		     // Or null - full URL will be returned
	// 		     // Or a function that should return %id%, for example:
	// 		     // id: function(url) { return 'parsed id'; }
	// 		     src: 'https://www.youtube.com/embed/xc2TsRwqjds?rel=0&autoplay=1' // Урл, который берется из кода iframe
	// 		 }
	// 		}
	// 	}
	// });