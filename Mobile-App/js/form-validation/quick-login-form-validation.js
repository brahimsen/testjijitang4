

$(document).ready(function(){
	
	
	btnsubmit   = $(".login-submit");
	
	btnsubmit.click(function(){
		
		
		
			if($(".login-form").valid()){
				
				
				
					
					window.location.href = "home.html";
					
				}
			
		})
	
	
$(".login-form").validate(
{rules:
{phonenumber:"required",
verification:"required",

},

	 

   invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();

            if (errors) {
                $("#login-error-message").show().text("Please Enter both Phone number and verification Code");
            } else {
                $("#login-error-message").hide();
            }
        },

	errorPlacement: function(error, element){}
	
}
  
);

});

