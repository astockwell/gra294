/*
 * Setup variables. Save the elements we want to use later (increases performance)
 */
var $window = $(window);
var $outer  = $('.outer');
var $middle = $('.middle');

/*
 * Function that finds the width of the '.outer' div and sets it's height and it's (and '.middle' div's) padding proportionately
 */
var reProportionBoxes = function() {
	var width = $outer.outerWidth();
	var proportion = width / 5;

	$outer.css('height', width);

	$outer.css('padding', proportion + "px");
	$middle.css('padding', proportion + "px");
}

/*
 * Run the function 'reProportionBoxes' when the page first loads and when it's resized
 */
$window.on('load', reProportionBoxes);
$window.on('resize', reProportionBoxes);