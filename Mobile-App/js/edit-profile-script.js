	
	
	
	
	$('#profile-experience-quit').live('click', function(e){
    
	var newtext = $("#reserachexp").val();
	
	
	$("#experience-content").text(newtext)

	});
	
	$('#profile-bio-quit').live('click', function(e){
    
	var newtext = $("#shortbio").val();
	
	
	$("#bio-content").text(newtext)

	});
	
	$('#profile-name-quit').live('click', function(e){
    
	var newname = $("#fullenametext").val();
	
	if ($("#fullenametext").val()) { 
	
	
	
	$("#username-content").text(newname);
	}
	
	

	});


	$('#profile-field-quit').live('click', function(e){
    
	if ($("input[name='field-choice']:checked").val()) { 
	
	var newfield = $("input[name='field-choice']:checked").val();
	
	$("#field-content").text(newfield);
	
	} 
 
});

$('#profile-institute-quit').live('click', function(e){
    
	var institutetext = $("#myinstitute").val();
	var deptext = $("#department").val();
	var roletext = $("#role").val();
	
	
	$("#role-content").text(institutetext);
	$("#dept-content").text(deptext);
	$("#institute-content").text(roletext);
	
	
	
	
    
		
  
});



$('a.profilefollow').live('click', function(e){
    e.preventDefault();
    $button = $(this);
    if($button.hasClass('following')){
        
        //$.ajax(); Do Unfollow
        
        $button.removeClass('following');
        $button.text('Follow')
       
    } else {
        
        // $.ajax(); Do Follow
        
        $button.addClass('following');
		$button.text('Unfollow')
		
		
        
    }
});
