$(document).ready(function () {
	$(".menu-toggler").on("click", function () {
		$(this).toggleClass("open");
		$(".top-nav").toggleClass("open");
	}); /** this will open the menu overlay  by adding the class 'open' to it*/

	$(".top-nav .nav-link").on("click", function () {
		$(this).removeClass("open");
		$(".top-nav").removeClass("open");
		$(".menu-toggler").removeClass("open");
	}); /** this will close the menu overlay after one of the nav links has been clicked */

	$("nav a[href*='#']").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top - 40,
			},
			2000
		);
	}); /** this will set the vertical position of the scroll bar to the top coordinate of the clicked nav-link element - 40px, the animation duration is 2 secs */

	$("#up").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			2000
		);
	}); /** this will set the vertical position of the scroll bar to 0(px), the animation duration is 2 secs */

	AOS.init({
		easing: "ease",
		duration: 1080,
		// once: true; /** this will make the animation happen only once **/
	}); /** this adds the aos library to the page so that the animations can be added by addindg the class names to the elements */
});
