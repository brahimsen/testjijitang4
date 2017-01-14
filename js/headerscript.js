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
		
		$("#index-signup-modal").click(function(){

				$("#Sign-up-Modal-phone").modal('show');


		});
		
			$(".signup-link").click(function(){

				$("#Sign-up-Modal-phone").modal('show');
				$("#index-Sign-in-Modal").modal('hide');
				$("#forgot-password-Modal-phone").modal('hide');
				$("#forgot-password-Modal-email").modal('hide');
				


		});
		
			$("#quick-sign-in").click(function(){

				$("#Sign-in-Modal-phone").modal('show');
				$("#index-Sign-in-Modal").modal('hide');


		});
		
			$("#email-switch-sign-in").click(function(){

				$("#Sign-in-Modal-phone").modal('hide');
				$("#index-Sign-in-Modal").modal('show');


		});
		
		
		
			$("#Login-link-from-phone").click(function(){

				$("#Sign-in-Modal-phone").modal('hide');
				$("#Sign-up-Modal-phone").modal('show');


		});
		
			$("#Login-link").click(function(){

				$("#Sign-up-Modal-phone").modal('hide');
				$("#index-Sign-in-Modal").modal('show');


		});
		
		$("#Login-link-email").click(function(){

				$("#Sign-up-Modal").modal('hide');
				$("#index-Sign-in-Modal").modal('show');


		});
		
		$("#email-switch-sign-up").click(function(){
		
		$('#Sign-up-Modal-phone').modal('hide');
		$('#Sign-up-Modal').modal('show');
		
		});
		
		$("#phone-switch-sign-up").click(function(){
		
		$('#Sign-up-Modal-phone').modal('show');
		$('#Sign-up-Modal').modal('hide');
		
		});
		
		$(".forgot-password-link").click(function(){
		
		$('#forgot-password-Modal-phone').modal('show');
		$('#index-Sign-in-Modal').modal('hide');
		
		});
		
		$("#resubmit-phone-number-pass-reset").click(function(){
		
		$('#forgot-password-Modal-phone').modal('show');
		$('#forgot-password-Modal-phone-verification').modal('hide');
		
		});
		
		$("#reset-pass-with-email-switch").click(function(){
		
		$('#forgot-password-Modal-phone').modal('hide');
		$('#forgot-password-Modal-email').modal('show');
		
		});
		
		$("#reset-pass-with-phone-switch").click(function(){
		
		$('#forgot-password-Modal-phone').modal('show');
		$('#forgot-password-Modal-email').modal('hide');
		
		});
		
		
		$(".article-share-open").click(function(){
		
		$('#article-share-modal').modal('show');
	
		
		});
		
		$(".add-to-collection-open").click(function(){
		
		$('#add-to-collection-modal').modal('show');
	
		
		});
		
		$(".publish-document-open").click(function(){
		
		$('#publish-document-popup').modal('show');
	
		
		});
		
		$("#delete-document-open").click(function(){
		
		$('#delete-document-popup').modal('show');
	
		
		});
		
		
		$("#submit-publication").click(function(){
		
		$('#success-pub-modal').modal('show');
		$('#project-publications-modal').modal('hide');
		
		
		});
		
		
		
		
		$( document ).ready(function() {
			
			  setTimeout(function() {
        $(".my-top-bar-message").hide('blind', {}, 500)
    }, 5000);
			
			$(".close-top-bar-message").click(function(){
		
					$(this).parent().hide();
	
		
		});

		

});

		
		
		