 $(document).ready(function() {
				$(".like-full").hide();
				$(".like-holder").click(function(){
					$('.like-toggle',this).toggle();
					
				});
			});
			
				$(".read-later-full").hide();
				$(".read-later-holder").click(function(){
					
					
					$(this).children('.read-later-empty').toggle();
					$(this).children('.read-later-full').toggle();
					
				});
				
					$(".note-popover-update").hide();
				$(".save,.note-popover-update").click(function(e){
					
					
					if($(window).width() > 767){
					$('.note-popover-update',this).fadeToggle();
					}else {
					$('.note-popover-update',this).slideToggle();
					
					}
					e.stopPropagation();
					
				
					
				});
				
			
				
				$("html").click(function(e){
					
					$('.note-popover-update').hide();
					
					
					
				
					
				});
				
$(document).ready(function(){
	$(".delete-article").click(function(){
		$("#Delete-article-Modal").modal('show');

	});
	
	$("#confirm-delete").click(function(){
		$("#confirm-Delete-article-Modal").modal('show');
		$("#Delete-article-Modal").modal('hide');

	});
	
	$('.myentry-poup').hide();
	$('.myentry-share-poup').hide();
	$('.social-icons-holder').addClass('hide-fix');
	
	$(".share-hoz-holder").click(function(){
				
					$('.myentry-share-poup',this).toggle();
					$(this).parent().siblings(".social-icons-holder").toggleClass('hide-fix');
						
					
					
	});
	
	
	$(".myentry-share").click(function(y){
				
					$('.myentry-share-poup',this).toggle();
				
					
	});
	

	});