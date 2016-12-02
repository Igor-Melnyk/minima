$('document').ready ( function (){
	$('.work').hover(
		function() {
			$(this).find('.tool').slideDown(200);
		},
		function () {
			$(this).find('.tool').slideUp(200);
		}
	);
	$('.menu-btn').click(function () {
		if ($('.top-nav').css('display') == 'none') {
			$('.top-nav').slideDown(200);
		}
		else {
			$('.top-nav').slideUp(200);
		}
	})
});