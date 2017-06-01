jQuery(document).ready(function($) {
	$(document).foundation();
	$('.men-mob').on('click', function(event) {
		event.preventDefault();
		$('.top-menu ul').toggle(300);
	});

	$('body').on('click', '.to-bot', function(event) {
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#first').offset().top + 50
		}, 500);
	});

});