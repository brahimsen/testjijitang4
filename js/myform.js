

$(document).ready(function(){
	

$(".myfirstform").validate(
{rules:
{
emailregi:{required:true,email:true},
passregi: {required:true, minlength: 6},
passconf: {required:true, equalTo: "#passregi"},
},

messages: {
emailregi: {
required: "Please enter your Email",
email: "Please Enter a valid Email address"
},
passregi: {
required: "Please enter your password",
minlength: "Password must be at least 6 characters"
},
passconf: {
required: "Please enter your password again",
equalTo: "Password does not mutch"
},


},
errorClass:"error",
highlight: function(label) {
    $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
  },

success: function(label) {
    label
      .text('looks good').addClass('valid')
	  .closest('.form-group').addClass('has-success');
      
  }
}
  
);




});

$(document).ready(function(){
	
$(".password-validation-form").validate(
{rules:
{passregiphone: {required:true, minlength: 6},
passconfphone: {required:true, equalTo: "#passregiphone"},
},

messages: {
passregiphone: {
required: "Please enter your password",
minlength: "Password must be at least 6 characters"
},
passconfphone: {
required: "Please enter your password again",
equalTo: "Password does not mutch"
},


},
errorClass:"error",
highlight: function(label) {
    $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
  },

success: function(label) {
    label
      .text('looks good').addClass('valid')
	  .closest('.form-group').addClass('has-success');
      
  }
}
  
);

});




     
$(document).ready(function(){
	$(".sign-in-alert").hide();
	$(".pass-sent-alert").hide();
	$("#mybtn").click(function(){
		
			if( $("#email").val() == "jijitang"){
				$(".sign-in-alert").hide();
				$(".pass-sent-alert").fadeIn(500)
			}
			else {
			$(".sign-in-alert").fadeIn(500)
			$(".pass-sent-alert").hide();
			
			}
		});

});

$(document).ready(function(){
	$(".sign-in-alert").hide();
	$("#mybtn").click(function(){
		
			if( $("#email").val() == "jijitang" && $("#pass").val() == "jijitang" ){
				window.location.replace("/homepage.html")
			}
			else {
			$(".sign-in-alert").fadeIn(500)
			
			}
		});

});

$(document).ready(function(){
	
	$("#verificationcodesend").click(function(){
			
			if(isNaN($("#phonenumberreg").val()) || $("#phonenumberreg").val() == "" ){
				$("#valid-phone-alert").addClass("show-number-error");
			}
			else {
			$("#valid-phone-alert").removeClass("show-number-error");
			$('#verficationcode').prop("disabled", false);
			
			}
		});

});

$(document).ready(function(){
	
	$("#submitphonereg").click(function(){
			
			if( $("#verficationcode").val() == "" || $("#phonenumberreg").val() == "" ){
				$("#phone-validation-error").addClass("show-number-error");
			}
			else {
			$('#Sign-up-Modal-phone').modal('hide');
			$('#password-reg-modal').modal('show');
			
			
			}
		});

});



$(document).ready(function(){
	
	$("#verificationcodesendsignin").click(function(){
			
			if(isNaN($("#phonenumberregsignin").val()) || $("#phonenumberregsignin").val() == "" ){
				$("#valid-phone-alert-sign-in").addClass("show-number-error");
			}
			else {
			$("#valid-phone-alert-sign-in").removeClass("show-number-error");
			$('#verificationcodesignin').prop("disabled", false);
			
			}
		});

});

$(document).ready(function(){
	
	$("#submitphoneregsignin").click(function(){
			
			if( $("#verificationcodesignin").val() == "" || $("#phonenumberregsignin").val() == "" ){
				$("#phone-validation-error-sign-in").addClass("show-number-error");
			}
			else {
			window.location.replace("/homepage.html")
			
			
			}
		});

});


$(document).ready(function(){
	
	$("#verificationcodesend-reset-pass").click(function(){
		
			
			
			if(isNaN($("#phonenumberreg-reset-pass").val()) || $("#phonenumberreg-reset-pass").val() == "" ){
				
				$("#valid-phone-alert-reset-pass").addClass("show-number-error");
			}
			else {
			$("#valid-phone-alert-reset-pass").removeClass("show-number-error");
			$('#verficationcode-reset-pass').prop("disabled", false);
			
			}
		});

});

$(document).ready(function(){
	
	$("#submitphonereg-reset-pass").click(function(){
			
			if( $("#verficationcode-reset-pass").val() == "" || $("#phonenumberreg-reset-pass").val() == "" ){
				$("#phone-validation-error-reset-pass").addClass("show-number-error");
			}
			else {
			
				window.location.replace("/password-change.html")
			
			}
		});

});

$(document).ready(function(){
	
	function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};
	
	$("#pass-email-retrieve").click(function(){
		
			var email = $("#email-retrieve").val();
			if(!isValidEmailAddress(email)) {
				$("#reset-pass-valid-email").addClass("show-number-error");
				
			}
			
			else {
			
			$("#reset-pass-valid-email").removeClass("show-number-error");
			$('#forgot-password-Modal-email').modal('hide');
			$('#forgot-password-Modal-email-submitted').modal('show');
			
			}
		});

});


