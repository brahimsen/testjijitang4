
 $(document).ready(function() {
var options = {
  valueNames: [ 'collection-grid-title' ]
};

var userList = new List('my-collections', options);

});

 $(document).ready(function() {
					
					$("#submit-create-collection").click(function(){
						
						if($("#collection-title").val() =="") {
						$(".create-edit-project-error").addClass('show-create-edit-project-error');
						
						}else{
						
							window.location.href = "my-collections.html";
						
						}
					});
					
					
					
			});

 $(document).ready(function() {
					
					$("#create-collection-btn").click(function(){
						$("#create-collection-modal").modal('show');
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
	
	   $(document).ready(function() {
  
  function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                
				$('#collection-new-back').css('background', 'transparent url('+e.target.result +') no-repeat center center', 'background-size', 'cover');

            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#collection-new-back-btn").change(function(){
        readURL(this);
    });
  
   });
