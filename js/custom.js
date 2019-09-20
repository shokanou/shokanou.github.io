(function($) { 
		  
$(document).ready(function(){
	$('.slide').prepend('<div class="patternOverlay"></div>');	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').animate({
			left:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
	});
	
	if($(window).width()>767){
		$('.navbar-wrapper').animate({
			opacity:0
		},200);
		$('.navbar-wrapper').addClass('default-menu');
		
	}	
	
	$('#nav-show').click(function(x){
		x.preventDefault();
		$('.wrapper').removeClass('noGap');
		$('.navbar-wrapper').animate({
			opacity:1
		},200);
		$('.navbar-wrapper').removeClass('default-menu');
		$(this).fadeOut();
	});
	
	$('.closeMenu').click(function(x){
		x.preventDefault();
		$('.navbar-wrapper').animate({
			opacity:0
		},50,function(){$('.navbar-wrapper').addClass('default-menu');});
		
		$('#nav-show').fadeIn();
	});
	
	
});	

/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});
	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
//]]>
		  
// for mobile nav js	
$(window).load(function(){
	$('button.navbar-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navbar-collapse').slideToggle();										 
	});					
});
// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'height':windowHeight });


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



// for portfoli lightbox jquary
jQuery(function() {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});
});

// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -16
        }, 1000);
        return false;
      }
    }
  });
});


// Testimonial slider
$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "fade",
	animationLoop: true,
	slideshow: true,
	pauseOnAction: false,
	slideshowSpeed: 7000,
	controlNav: true,
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});


// we worked slider
$(window).load(function(){
      $('.worklogo').flexslider({
        animation: "slide",
		slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        
      });
    });

// Skill set 


}(jQuery));

$(document).ready(function(){
            
    "use strict";

    $('.menu-container').each(function(index) {
        $(this).find('.circle').attr('menu-link', index);
        $(this).find('.list-menu').clone().appendTo('body').attr('menu-link', index);
    });

    $('.menu-container .circle').click(function() {
        var linkedVideo = $('section').closest('body').find('.list-menu[menu-link="' + $(this).attr('menu-link') + '"]');
        linkedVideo.toggleClass('reveal-modal');
       
    });

    $('section').closest('body').find('.close-iframe').click(function() {
        $(this).closest('.list-menu').toggleClass('reveal-modal');
    });
    

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });