$(document).ready(function(){

     
     $('.slick-slider').slick({
     	slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
     });

     $('.slick-arrow').hide();

    function number_to(className, from,to,duration) {
		let element = $('.'+className);
		let start = new Date().getTime();
		setTimeout( function() {
			let now = (new Date().getTime()) - start;
			let progress = now / duration;
			let result = Math.floor((to - from) * progress + from);
			element.html(progress < 1 ? result+'+' : to+'+');
		if (progress < 1)setTimeout(arguments.callee, 10);
		}, 10);
	}
	
	number_to('price-num-1', 1,500,10000);
	number_to('price-num-2', 1,300,10000);
	number_to('price-num-3', 1,200,10000);
	number_to('price-num-4', 1,400,10000);

	

	$( "#tabs" ).tabs();

});

