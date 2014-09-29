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