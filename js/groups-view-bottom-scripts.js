 $(document).ready(function() {

      var owl = $("#owl-demo");

      owl.owlCarousel({

      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
      });

      // Custom Navigation Events
      $(".next-user").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev-user").click(function(){
        owl.trigger('owl.prev');
      })
 
    });
	
	    $(document).ready(function() {

      var owl2 = $("#owl-demo-2");

      owl2.owlCarousel({

      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
      });

      // Custom Navigation Events
      $(".next-user2").click(function(){
        owl2.trigger('owl.next');
      })
      $(".prev-user2").click(function(){
        owl2.trigger('owl.prev');
      })

    });