

$(document).ready(function(){
	

$(".login-form").validate(
{rules:
{username:"required",
userpassword:"required",

},

	 

   invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();

            if (errors) {
                $("#login-error-message").show().text("Please Enter Both Username and Password");
            } else {
                $("#login-error-message").hide();
            }
        },

	errorPlacement: function(error, element){}
	
}
  
);

});

