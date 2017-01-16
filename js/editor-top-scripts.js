
$(document).ready(function(){
	

	
	
	$("#add-interests-btn").click(function(e) {
    
           $(".project-keyword-list").append(" <div class='editor-all-tags'><span class='tag-text'>"+$("#project-keywords").val()+"</span><div class='tag-delete lnr lnr-cross'></div></div>");
	   $("#project-keywords").val('')
   
});

	 $('.project-keyword-list').on('click', '.tag-delete', function(){
	 	
	 $(this).parent().remove()
   
});

	 $('#main-document-title').keyup(function () {
         $('#document-modal-title').val($(this).val());
		 
		 if($("#main-document-title").val() == "") {
		 
		 
		 $('#left-bar-document-article').text("Untitled Document.");
		
		 
		 } else{
		 
		 $('#left-bar-document-article').text($(this).val());
		}
	 
	 });
	
	$('#publish-document-pop-up').click(function () {
         
		 if($("#document-modal-title").val() == ""){
			
		$(".publish-document-error").addClass("show-val-error");
		

	}else{

	window.location.href = "new-article-view.html";
	
	
	}
		 
     });
	 
	 $(".document-saved-confirmation").hide();
	 $('#editor-save-document').click(function () {
    
		$(".document-saved-confirmation").fadeIn().delay(2000).fadeOut();
		 
     });
	 
	  $('#new-editor-placeholder').click(function () {
	 
	
    
		$("#new-editor-placeholder").hide();
		 
     });
	 
	   $('.editor-header-btn').click(function () {
	 
	
    
		$(this).addClass("editor-header-btn-active");
		$(".editor-header-btn").not(this).removeClass("editor-header-btn-active");
		 
     });
	 
	
	});
	