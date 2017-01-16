 $(document).ready(function() {
	  
	  $(".editor-publish-popup").hide();
	  $(".publish-with-collection-wrapper").hide();
	  $(".editor-delete-popup").hide();
	  
	  
	  $("#publish-article-icon").click(function(z){
		  
		  $(".editor-publish-popup").toggle();
		  $(".editor-delete-popup").hide();
		   z.stopPropagation();
		  
	  });
	  
	    $("#icon-remove-article").click(function(e){
		  
		  $(".editor-delete-popup").toggle();
		  $(".editor-publish-popup").hide();
		  $('.share-collection-2 > .collection-popover-submit ').hide();
		  $('.share-collection > .collection-popover-submit ').hide();
		  e.stopPropagation();
		  
	  });
	  
	  $("html").click(function(e){
		  $(".editor-delete-popup").hide();
		  
	  });
	  
	  
	  
	  $("#cancel-delete").click(function(){
		  
		  $(".editor-delete-popup").hide();
		  
	
		  
	  });
	  
	  
	  
	  $("#note-popover-update-footer").click(function(){
		  
		  $(".publish-with-collection-wrapper").show();
		  $(".publish-no-collection").hide();
		  $("#note-popover-update-footer").hide();
		  
		  
		  
		  
	  });
	  
	   $("#cancel-publish-no-col").click(function(){
		   
		  
		  $(".editor-publish-popup").hide();
		  
	  });
	  
	   $("#cancel-publish-with-col").click(function(){
		  
		  $(".publish-with-collection-wrapper").hide();
		  $(".publish-no-collection").show();
		  $("#note-popover-update-footer").show();
		  
	  });
	  
	   $(".editor-comment-icon").click(function(){
	  });
	  
	  
	  $(".editor-comment-icon").click(function(){
		  
		  
		  
		  if($('.editor-left-comment-bar').css("width") == "0px"){
		  
		  $('.editor-left-comment-bar').animate({width: "24%"});
		  $('.editor').animate({"width": "62%", "margin-left": "28%" });
		  
			
				
		  }
		  else {
			  
			$('.editor-left-comment-bar').animate({width: "0%"});
			
			$('.editor').animate({"width": "84%", "margin-left": "8%" });
		  
		  }
			
	  });
	  
	  $(".myentry-share-poup").hide();
	  
	  $("#editor-share-btn").click(function(e){
		  
		  $(".myentry-share-poup").toggle();
		  e.stopPropagation();
	  
	  
	  });
	  
	  $("html").click(function(e){
		  $(".myentry-share-poup").hide();
		  
	  });
	  
  });
  


$(window).scroll(function(){
	
		
  
      scroll = $(window).scrollTop();

  if (scroll >= 50 && $(window).width() < 980 ) {
	  
	 
	  
	  
	  
	  
	  
	   $('.editor-icons-holder').addClass('fix-editor-icons-to-top');
	   $('.dashbord-create-inner > div').css("padding-bottom","0px");  
	   $('.editor-icons-holder').css("padding-top","10px");
	  }
  
  
  else{ $('.editor-icons-holder').removeClass('fix-editor-icons-to-top');
  
			$('.dashbord-create-inner > div').css("padding-bottom","5px"); $('.editor-icons-holder').css("padding-top","5px"); 
  
  
   }


	

});

	$(document).ready(function(){
	$('#editor-title').autosize();
	});