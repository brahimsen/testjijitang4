
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
var options = {
  valueNames: [ 'name' ]
};

var userList = new List('my-groups-updates', options);

});
 $(document).ready(function() {
$("#create-project-btn").click(function(){
				
				$("#create-project-modal").modal('show');


		});
		
		
	
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
		
	
