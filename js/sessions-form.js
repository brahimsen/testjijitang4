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
				if($(".create-session-form").valid()){
					widget.show();
					widget.not(':eq('+(current++)+')').hide();
					
				}
			}
			hideButtons(current);
		})
		
		
		// if form valid go to user infomation
		
		btnsubmit.click(function(){
		
			if($(".create-session-form").valid()){
					
					window.location.href = "my-projects.html";
					
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

	    $('.create-session-form').validate({ // initialize plugin
			ignore:":not(:visible)",			
			rules: {
				sessiontitle:"required",
				sessiontype:"required",
				sessionfield:"required",
				sessionstarttime:"required",
				sessionendtime:"required",
				sessionregfrom:"required",
				sessionregto:"required",
				
				
				
			
			},
			
			messages: {
				sessiontitle:"Please write down session title",
				sessiontype:"Please select session type",
				sessionfield:"Please select session field",
				sessionstarttime:"Select session starting time",
				sessionendtime:"Select session ending time",
				sessionregfrom:"Select registration starting time",
				sessionregto:"Select registration starting time",
				
			},
			
			
				errorClass:"error",
				highlight: function(label) {
				$(label).closest('.form-group').removeClass('has-success').addClass('has-error');
				},

  
			
			
			
			
			
			
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
	

	

