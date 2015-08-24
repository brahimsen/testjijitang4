

$(document).ready(function(){



$(".test-form-main").validate(
{rules:
{name:"required",
testprojectname: {required:true, maxlength: 200},

},

messages: {


testprojectname: {
required: "Please enter project name",
maxlength: "Project name can be maximum 200 characters"
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

