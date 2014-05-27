$( document ).ready(function() {
	$("#search-text").hide();
	$(".search-popover-desktop").hide();
  $(".search-popover-desktop,#search-btn").click(function(e){
	  if($("#search-text").val() == ""){
    $("#search-text").toggle("fade");
	  }
	  else {
		  $('.search-popover-desktop').show();
					e.stopPropagation();
					
		 
	  }
	  
	  $("html").click(function(e){
					
					$('.search-popover-desktop').hide();
					
					
				
					
				});
});


});

$( document ).ready(function() {
	$("#search-text-mobile").hide();
	$(".search-popover-mobile").hide();
  $(".search-popover-mobile,#search-btn-mobile").click(function(e){
	  if($("#search-text-mobile").val() == ""){
    $("#search-text-mobile").toggle( "slide");
	  }
	  else {
		   $('.search-popover-mobile').show();
					e.stopPropagation();
		
		 
	  }
	  
	  $("html").click(function(e){
					
					$('.search-popover-mobile').hide();
					
					
				
					
				});
});
});


$(".alert-popover-desktop").hide();
				$(".alert-btn,.alert-popover-desktop").click(function(e){
					
					$('.alert-popover-desktop').show();
					e.stopPropagation();
					
				
					
				});
				
				$("html").click(function(e){
					
					$('.alert-popover-desktop').hide();
					
					
				
					
				});
				
				$(document).ready(function() {
	$("#close-add").click(function(){
		$(".adver-wrapper").hide("slide", { direction: "up" }, 1000);

		

});
});