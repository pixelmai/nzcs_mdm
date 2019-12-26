// This is where it all goes :)

jQuery(function($){
	
	$(".snap_container").scroll(function(event) {
      	var scroll = $(this).scrollTop();
      	
      	if (scroll > 300) {
         	$("#main_navigation").addClass("menu_fadein");

      	} else {
          	$("#main_navigation").removeClass("menu_fadein");
      	}


  	
    	//if rocket in viewport
	    
	    if (isInViewport($("#rocket"))) {
	    	$("#rocket").addClass("animate_this");
	    }
	    else{
	    	$("#rocket").removeClass("animate_this");
	    }

		
 	});

	
	$(window).scroll(function(event) {
      	var scroll = $(this).scrollTop();
      	
      	if (scroll > 300) {
         	$("#main_navigation").addClass("menu_fadein");

      	} else {
          	$("#main_navigation").removeClass("menu_fadein");
      	}
		
 	});




	//detect if in viewport
  	function isInViewport(el){
  		var top_of_element = $(el).offset().top;
	    var bottom_of_element = $(el).offset().top + $(el).outerHeight() - 200;
	    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight() ;
	    var top_of_screen = $(window).scrollTop();

	    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	        // the element is visible, do something
	        return true;
	    } else {
	        // the element is not visible, do something else
	        return false
	    }
  	}


	

  	function smoothScroll(el_section){
  		$('html, body').animate({
	        scrollTop: $(el_section).offset().top
	    }, 600);
  	}

 	
  	$('.testi_slider_container').slick({

	  	infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: false,
	  	responsive: [
		    {
	      		breakpoint: 1201,
		      	settings: {
		        	arrows: false,
		        	slidesToShow: 2,
		        	slidesToScroll: 1,
		      	}
		    },
		    {
		      	breakpoint: 768,
		      	settings: {
		        	arrows: false,
		        	slidesToShow: 1,
		        	slidesToScroll: 1,
		      	}
		    }
	  	]
	});
	
  	if (CSS.supports('scroll-snap-align: start')) {
	  // use css scroll snap

	  
	} else {
	  // use fallback
	  /*
	  console.log('// use fallback');
	  $("body").scroll(function(event) {
      	var scroll2 = $(this).scrollTop();
      	console.log(scroll2);
      	if (scroll2 > 300) {
         	$("#main_navigation").addClass("menu_fadein");

      	} else {
          	$("#main_navigation").removeClass("menu_fadein");
      	}
      });
	  $("body").css({
	  	"height": "auto", 
	  	"overflow": "auto"
	  });
	  $(".snap_container").css({
	  	"height": "auto", 
	  	"scroll-snap-type": "unset", 
	  	"scroll-snap-points-y": "unset", 
	  	"scroll-snap-type": "unset", 
	  	"overflow": "auto"
	  	});

	  $(".snap_container .snap_section").css({
	  	"scroll-snap-align": "unset",
	  });
		*/
	  
	}

 	
});

