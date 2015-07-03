$( document ).ready(function() {

	$("#search-text").hide();
	$(".search-popover-desktop").hide();
    $(".search-popover-desktop,#search-btn").click(function(e){
	if($("#search-text").val() == ""){
    	
		$('#search-text').animate({"width":"toggle"}, 1000);
	} else {
		$('.search-popover-desktop').show();
			e.stopPropagation();
	    }
	  
	  $("html").click(function(e){
			$('.search-popover-desktop').hide();
      });
	});

});


$(".alert-popover-desktop").hide();

$("#top-menu-btn").click(function(){
	
	if($(".nav-collapse").hasClass("full-height")){
		
		$(".nav-collapse").removeClass("full-height");
		$(".nav-collapse").addClass("no-height");
		
	 } else {
	
		$(".nav-collapse").addClass("full-height");
		$(".nav-collapse").removeClass("no-height");
	
	}
	
	$(".nav-collapse-2").addClass("no-height");
	$(".nav-collapse-2").removeClass("full-height");
	
	
	
	
	

});

$("#top-menu-btn-2").click(function(){
	
	if($(".nav-collapse-2").hasClass("full-height")){
		
		$(".nav-collapse-2").removeClass("full-height");
		$(".nav-collapse-2").addClass("no-height");
		
	 } else {
	
		$(".nav-collapse-2").addClass("full-height");
		$(".nav-collapse-2").removeClass("no-height");
	
	}
	
	$(".nav-collapse").addClass("no-height");
	$(".nav-collapse").removeClass("full-height");
	
	
	

});

$(".alert-popover-desktop").click(function(){
	$('.nav-admin-holder').addClass('hide-fix');

});

$(".alert-btn,.alert-popover-desktop").click(function(e){
					
					$('.alert-popover-desktop').toggle();
					$('.nav-admin-holder').addClass('hide-fix');
					$('.create-holder').addClass('hide-fix');
					$(".have-notification").hide();
					$(".alert-btn").css("margin-right","22px");
					
					
					e.stopPropagation();
					
				
					
				});
				
				$("html").click(function(e){
					
					$('.alert-popover-desktop').hide();
					$('.nav-admin-holder').removeClass('hide-fix');
					$('.create-holder').removeClass('hide-fix');
					
					
				
					
				});
				
				$(".avatar-link").click(function(){
					
					
					$('.nav-admin-holder').removeClass('hide-fix');
					
					
				
					
				});
				
					$(".plus-create-link").click(function(){
					
					
					$('.create-holder').removeClass('hide-fix');
					
					
				
					
				});
				
				
				$(document).ready(function() {
					$("#close-add").click(function(){
					$(".adver-wrapper").hide("slide", { direction: "up" }, 1000);

		

});
});


			$("#index-login-modal").click(function(){

				$("#index-Sign-in-Modal").modal('show');


		});
		
			$("#signup-link").click(function(){

				$("#Sign-up-Modal").modal('show');
				$("#index-Sign-in-Modal").modal('hide');


		});
		
			$("#Login-link").click(function(){

				$("#Sign-up-Modal").modal('hide');
				$("#index-Sign-in-Modal").modal('show');


		});