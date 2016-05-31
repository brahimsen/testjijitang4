

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
				window.location.replace("http://myjijitang/jijitang-index.html")
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
		
	$("#email-switch-sign-up").click(function(){
		
		$('#Sign-up-Modal-phone').modal('hide');
		$('#Sign-up-Modal').modal('show');
		
		});
		
		$("#phone-switch-sign-up").click(function(){
		
		$('#Sign-up-Modal-phone').modal('show');
		$('#Sign-up-Modal').modal('hide');
		
		});

});

