 $(document).ready(function() {
				$(".like-full").hide();
				$(".like-holder").click(function(){
					$('.like',this).hide();
					$('.like-full',this).show();
				});
			});
			
				$(".read-later-full").hide();
				$(".read-later-holder").click(function(){
					$('.read-later-empty',this).hide();
					$('.read-later-full',this).show();
				});
				
					$(".note-popover-update").hide();
				$(".save,.note-popover-update").click(function(e){
					
					$('.note-popover-update',this).fadeIn();
					e.stopPropagation();
					
				
					
				});
				
				$('.myentry-share-poup').hide();
				$(".myentry-share,.myentry-share-poup").click(function(e){
					
				
					$('.myentry-share-poup',this).fadeIn();
					e.stopPropagation();
					
					
				});
				
				$("html").click(function(e){
					
					$('.note-popover-update').hide();
					$('.myentry-share-poup').hide();
					
					
				
					
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
	$(".myentry-popup").click(function(){
				
					$('.myentry-poup',this).toggle();
					
	});
	
	$(".myentry-share").click(function(){
				
					$('.myentry-share-poup',this).toggle();
					
	});
	

	});