

$(document).ready(function(){
	
	btnsubmit   = $(".user-form-submit");
	
		btnsubmit.click(function(){
		
			if($(".user-form").valid()){
					
					window.location.href = "recommended-researchers.html";
					
				}
			
		})

$(".user-form").validate(





{rules:
{fullname:"required",
field:"required",

},

messages: {
				fullname : "Please Enter Your full Name",
				field:"Please Select Your field of research",
				
				
			},

errorPlacement: function(error, element) {
				 error.appendTo($('#login-error-message'));
			}

}


  
);




  

});

