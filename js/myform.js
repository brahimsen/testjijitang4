

$(document).ready(function(){
	

$(".myfirstform").validate(
{rules:
{name:"required",
email:{required:true,email:true},
pass: {required:true, minlength: 6},
passconf: {required:true, equalTo: "#pass"},
},

messages: {
name:"Please write down your name",
email: {
required: "Please enter your Email",
email: "Please Enter a valid Email address"
},
pass: {
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
