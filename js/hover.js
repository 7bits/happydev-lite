$(document).ready(function () {

	var hoverOn = function(element) {
			$(element).addClass('share-hovered');
			$(element).find('.js-hide-on-hover').addClass('hided');
			$(element).find('.js-show-on-hover').addClass('inline');
		};
	var hoverOff = function(element) {
			$(element).removeClass('share-hovered');
			$(element).find('.js-hide-on-hover').removeClass('hided');
			$(element).find('.js-show-on-hover').removeClass('inline');
		};

	if (!('ontouchstart' in document)) {

		$('.js-tw-hover').hover(function(){
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});

		$('.js-vk-hover').hover(function() {
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});

		$('.js-fb-hover').hover(function() {
			hoverOn(this);
		}, function(){
			hoverOff(this);
		});
	}else {
		//off hover effect for touchscreen devices
		hoverOn('.js-share-for-touch');
	}

});