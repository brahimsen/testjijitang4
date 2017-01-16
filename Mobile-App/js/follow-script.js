	$('button.followButton').live('click', function(e){
    e.preventDefault();
    $button = $(this);
    if($button.hasClass('following')){
        
        //$.ajax(); Do Unfollow
        
        $button.removeClass('following');
		$button.removeClass('both-follow');
		$button.addClass('not-followed');
        
       
    }
	
	else if($button.hasClass('both-follow')){
        
        //$.ajax(); Do Unfollow
        
        $button.removeClass('following');
		$button.removeClass('both-follow');
		$button.addClass('not-followed');
        
       
    }

   else if($button.hasClass('not-followed') && $button.hasClass('he-follow-flag')){
        
        //$.ajax(); Do Unfollow
        
        $button.removeClass('following');
		$button.addClass('both-follow');
		$button.removeClass('not-followed');
        
       
    } else if($button.hasClass('not-followed') && !$button.hasClass('he-follow-flag')){
        
        //$.ajax(); Do Unfollow
        
        $button.addClass('following');
		$button.removeClass('both-follow');
		$button.removeClass('not-followed');
        
       
    }
	
	
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
