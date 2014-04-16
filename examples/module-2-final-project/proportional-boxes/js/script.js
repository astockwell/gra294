/*
 * Setup (cache) jQuery selectors. Learn about caching variables here: http://mikeadamsnc.com/cache-jquery-selectors-for-better-performance/
 */
var $window = $(window);
var $outer  = $('.outer');
var $middle = $('.middle');

/*
 * Function that finds the width of the '.outer' div and sets it's height and it's (and '.middle' div's) padding proportionately
 */
var reProportionBoxes = function() {
	var width = $outer.outerWidth(); // Learn about jQuery's ".outerWidth()" method here: http://api.jquery.com/outerwidth/
	var proportion = width / 5;

	$outer.css('height', width); // Learn about jQuery's ".css()" method here: http://api.jquery.com/css/

	$outer.css('padding', proportion + "px");
	$middle.css('padding', proportion + "px");
}

/*
 * Run the function 'reProportionBoxes' when the page first loads and when it's resized
 */
$window.on('load', reProportionBoxes); // Learn about jQuery's ".on()" method here: http://api.jquery.com/on/
$window.on('resize', reProportionBoxes);