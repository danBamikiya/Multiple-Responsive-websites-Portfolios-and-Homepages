$(document).ready(function () {
	$(".menu-toggler").on("click", function () {
		$(this).toggleClass("open");
		$(".top-nav").toggleClass("open");
	});

	$(".top-nav .nav-link").on("click", function () {
		$(this).removeClass("open");
		$(".top-nav").removeClass("open");
		$(".menu-toggler").removeClass("open");
	});

	$("nav a[href*='#']").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top - 40,
			},
			2000
		);
	});

	$("#up").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			2000
		);
	});

	AOS.init({
		easing: "ease",
		duration: 1080,
		// once: true; /** this will make the animation happen only once **/
	});
});
