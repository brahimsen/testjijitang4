$(document).ready(function(){
		var current = 1;
		
		widget      = $(".step");
		btnnext     = $(".next");
		btnback     = $(".back"); 
		btnsubmit   = $(".submit");

		// Init buttons and UI
		widget.not(':eq(0)').hide();
		hideButtons(current);
		

		// Next button click action
		btnnext.click(function(){
			if(current < widget.length){
				// Check validation
				if($(".form").valid()){
					widget.show();
					widget.not(':eq('+(current++)+')').hide();
					
				}
			}
			hideButtons(current);
		})
		
		
		// if form valid go to user infomation
		
		btnsubmit.click(function(){
		
			if($(".form").valid()){
					
					window.location.href = "user-information.html";
					
				}
			
		})

		// Back button click action
		btnback.click(function(){
			if(current > 1){
				current = current - 2;
				if(current < widget.length){
					widget.show();
					widget.not(':eq('+(current++)+')').hide();
					
				}
			}
			hideButtons(current);
		})

	    $('.form').validate({ // initialize plugin
			ignore:":not(:visible)",			
			rules: {
				phonenumber : "required",
				verfification : "required",
				fpassword : "required",
				rpassword: { required : true, equalTo: "#fpassword"},
				
				
			
			},
			
			messages: {
				phonenumber : "Please Enter Phone Number",
				verfification:"Please Enter Code",
				fpassword:"Please Enter Password",
				rpassword: {
					required: "Please Confirm your password",
					equalTo: "Password does not mutch"
				},
			},
			
			errorPlacement: function(error, element) {
				 error.appendTo($('#sign-up-error'));
			}
			
			
			
			
			
	    });

	});


	// Hide buttons according to the current step
	hideButtons = function(current){
		var limit = parseInt(widget.length); 

		$(".action").hide();

		if(current < limit) btnnext.show();
		if(current > 1) btnback.show();
		if (current == limit) { 
			// Show entered values
			
			btnnext.hide(); 
			btnsubmit.show();
		}
	}