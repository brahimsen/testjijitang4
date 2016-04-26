
	 $(document).ready(function() {
					
					$("#submit-edit-project-form-1").click(function(){
						
						if($("#project-title").val() =="" || $("#project-field").val() =="" || $("#project-type").val() =="" || $("#datepickerstart").val() =="" || $("#datepickerend").val() =="") {
						$(".edit-project-error").addClass('show-edit-project-error');
						}else{
						
							window.location.href = "project-management.html";
						
						}
					});
					
					
					
			});
		
			
			 $(document).ready(function() {
					
					$(".add-team-member-btn").click(function(){
						$("#Add-team-member").modal('show');
					});
					
					$("#edit-project-first-step-btn").click(function(){
						$("#edit-project-modal-first-step").modal('show');
					});
					
					$(".edit-project-second-step-btn").click(function(){
						$("#edit-project-modal-second-step").modal('show');
					});
					
					$("#share-modal-btn").click(function(){
						$("#project-share-modal").modal('show');
					});
					
					$(".add-project-publication-btn").click(function(){
						$("#project-publications-modal").modal('show');
					});
					
					
					
					
			});
			
			
			
			$(document).ready(function(){
	

	
	
	$("#add-interests-btn").click(function(e) {
    
           $(".project-keyword-list").append(" <div class='editor-all-tags'><span class='tag-text'>"+$("#project-keywords").val()+"</span><div class='tag-delete lnr lnr-cross'></div></div>");
	   $("#project-keywords").val('')
   
});

	 $('.project-keyword-list').on('click', '.tag-delete', function(){
	 	
	 $(this).parent().remove()
   
});
	
	
	});
			
	
		// INVITATION SCRIPTS
		
		
		
		
					
						 $(document).ready(function() {
  
			function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                
				$('#project-back-preview').css('background', 'transparent url('+e.target.result +') no-repeat center center', 'background-size', 'cover');

            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#change-project-background").change(function(){
        readURL(this);
    });
	
		$(function() {

    $( "#datepickerstart" ).datepicker({
      changeMonth: true,
      changeYear: true,
	  yearRange: "1985:2045"
    });
	
	 $( "#datepickerend" ).datepicker({
      changeMonth: true,
      changeYear: true,
	  yearRange: "1985:2045"
    });
  });				
		
  
   });
						
								
								
			  $(document).ready(function(){
  
  $("#submit-publication").click(function() {
  
  
	if($("#pub-title").val() == "" || $("#pub-publish-time").val() == "" || $("#pub-journal").val() == "" || $(".pub-author-list > div").length == 0 ){
	
		$(".publication-error").addClass("show-publication-error");
		

	}else{
	var authorarray = [];
	$('.pub-author-list').children('.editor-all-tags').each(function () {
	authorarray.push($(this).children('.tag-text').text());
    
});
	
	
	
	
	window.location.href = "project-management.html";
	
	
	}
  
		
  

  });
  
  });

	
	$(document).ready(function(){
	

	
	
	$("#add-author-btn").click(function(e) {
    
           $(".pub-author-list").append(" <div class='editor-all-tags'><span class='tag-text'>"+$("#authors-list").val()+"</span><div class='tag-delete lnr lnr-cross'></div></div>");
	   $("#authors-list").val('')
   
});

	 $('.pub-author-list').on('click', '.tag-delete', function(){
	 	
	 $(this).parent().remove()
   
});
	
	
	});
	
	
	$(document).ready(function(){
	

	
	
	$("#project-add-pub-btn").click(function(e) {
    
       $(".project-publications-holder").append(" <p class='project-single-publication'>"+$("#project-publication-content").val()+"<span class='publication-single-toolbar'><span  class='single-publication-edit icon-uniE605' ></span><span class='single-publication-delete icon-remove'></span></span></p>");
	   $("#project-publication-content").val('');
	   
    
});





	
	
	});	