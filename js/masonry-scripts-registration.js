$(window).load(function(){



$('#profile-columns').masonry({
  itemSelector: '.profile-grid-item',
  percentPosition: true,
  gutter: 20
});





        $(".regis-form-next").click(function(){
        
           $('#profile-columns').masonry({
				itemSelector: '.profile-grid-item',
				percentPosition: true,
				gutter: 20
			});
	

});

});