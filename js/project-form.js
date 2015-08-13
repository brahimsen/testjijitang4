

$(document).ready(function(){



$(".project-form-main").validate(
{rules:
{name:"required",
projecttyperadio:{required:true},
datepickerstart:{required:true},
datepickerend:{required:true},

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

