

$(document).ready(function(){
	
$('form').each(function(key, form) {
$(".phone-number-form").validate(
{rules:
{phonenumber:"required",

},

	 

   invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();

            if (errors) {
                $("#phone-error-message").show().text("Please Enter Phone Number");
            } else {
                $("#phone-error-message").hide();
            }
        },

	errorPlacement: function(error, element){}
	
}
  
);

);

});
