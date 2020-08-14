$(document).ready(function() {

	$(window).scroll(function() {
		let anchoVentana = $(window).width()

		if(anchoVentana > 800 ) {
			 let scroll = $(window).scrollTop()

			 $("header .textos").css({
			 	"transform":"translate(0px," + scroll / 4 + "%)"
			 })

			  $(".acerca-de article").css({
			 	"transform":"translate(0px, -" + scroll / 4 + "%)"
			 })
		} 
	})

	$(window).resize(function() {
		let anchoVentana = $(window).width()
		if(anchoVentana < 800) {
			$(".acerca-de article").css({
			 	"transform":"translate(0px, 0px)"
			 })

		} 
	})

})