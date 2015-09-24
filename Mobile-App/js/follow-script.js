	$('button.followButton').live('click', function(e){
    e.preventDefault();
    $button = $(this);
    if($button.hasClass('following')){
        
        //$.ajax(); Do Unfollow
        
        $button.removeClass('following');
        $button.addClass('icon-user-add-outline');
		$button.removeClass('icon-user-delete');
       
    } else {
        
        // $.ajax(); Do Follow
        $button.removeClass('icon-user-add-outline');
        $button.addClass('following');
		$button.addClass('icon-user-delete');
		
		
        
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
