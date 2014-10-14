
$(window).scroll(function(){
	
		
  
      scroll = $(window).scrollTop();

  if (scroll >= 100) { $('.article-top-wrapper').addClass('fixed-top-article'); $('.article-left-mobile-wrapper').addClass('plus-twenty-top'); }
  else{ $('.article-top-wrapper').removeClass('fixed-top-article'); $('.article-left-mobile-wrapper').removeClass('plus-twenty-top'); }
});



$(document).ready(function() {
	
	
		
	
	
		var f= document.getElementById('sticko');

window.onscroll = function(){
    f.scrollTop=document.body.scrollTop;
}
	
	
	$('.view-comment-section').hide();			
	$('.answer-comment-input').hide();
	$('.answer-comment-link-cancel').hide();
	var s = $(".article-left");
	var e = $(".article-right");
	var h = $(".article-title").css("height");;
	
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		
		if (windowpos >= pos.top) {
			
			
			
			
			s.addClass("stick");
			s.addClass("fix-menu-top-margin");
			
		
			
			
			
		} else {
		
			
			s.removeClass("stick");
			s.removeClass("fix-menu-top-margin");
			
			
		}
	});


				$(".view-comment-show").click(function(e){
				
				
				$('.article-left-wrapper').animate({"width":"hide","opacity":"hide" });
				$('.article-title').animate({"margin-left":"2%" });
				
				if($('.article-left-wrapper').css("display") == "block") {
				$('.article-right').animate({"width":"95.5%"});
				
				}
				
				$('.view-comment-section').hide();
				$('.view-comment-section',this).toggle();
					e.stopPropagation();
				
					
					
				});
				
					$("html").click(function(e){
					
					
					$('.view-comment-section').hide();
					<!--$('.article-left-wrapper').delay(200).fadeIn(500);-->
					$('.article-left-wrapper').animate({"width":"show","opacity":"show" });
					$('.article-title').animate({"margin-left":"22%" });
					$('.article-right').css("width","74%")
					
					
					
				
					
				});
			
			
			
			
			$('.article-left-mobile-wrapper').addClass('hide-fix');
			$("#show-menu").click(function(x){
				
			
			$('.article-left-mobile-wrapper').removeClass('hide-fix');
			
				
				$('.article-left-mobile-wrapper',this).toggle();
					x.stopPropagation();
				
					
					
				
				
				
				
			
				
					
					
				});
				
					$("html").click(function(x){
					
					
					
					
				$('.article-left-mobile-wrapper').addClass('hide-fix');					
					
									
		
					
				});
				

	


				
				
					
	
				
				
				
				
			
				
				
			$('.myentry-share-poup').hide();
			
			
				$(".myentry-share,.myentry-share-poup").click(function(e){
				
					
				
				$('.myentry-share-poup',this).toggle();
					e.stopPropagation();
				
					
					
				});
				
					$("html").click(function(e){
					
					
					$('.myentry-share-poup').hide();
					
					
				
					
				});
				
				$('.view-comment-btn-hover').addClass('hide-fix');
			
			
				$(".article-view-tab-content").hover(function(){
				
					
				
				$('.view-comment-btn-hover',this).toggleClass('hide-fix');
				$('.view-comment-btn',this).toggleClass('hide-fix');
					
				
					
					
				});
				
				$('.view-comment-btn-hover-mobile').addClass('hide-fix');
			
			
				$(".article-view-tab-content").hover(function(){
				
					
				
				$('.view-comment-btn-hover-mobile',this).toggleClass('hide-fix');
				$('.view-comment-btn-mobile',this).toggleClass('hide-fix');
					
				
					
					
				});
				
			
				
					
					
					
					$(".comment-edit-class").addClass('hide-fix');
					$(".comment-edit-class").addClass('test-add');
					$('.comment-edit-holder').click(function(){
					$('.comment-edit-class',this).toggleClass('hide-fix');
					$('.comment-edit-class',this).toggleClass('test-add');
					
					
					});
					
					$('.cancel-edit-comment').click(function(){
					
					$(this).parent().addClass('test-add');
					
					
					});
					
					$('.empty-comment').click(function(){
					
					 $(this).parent().siblings(".main-comment-text").val("");
					 
				
					
					
					
					});
					
					$('.answer-comment-link').click(function(){
						
					
					$(this).siblings(".answer-comment-input").show();
					$(this).siblings(".answer-comment-link-cancel").show();
					$(this).siblings(".note-saved-block").hide();
					$(this).hide();
		
					});
					
					$('.answer-comment-link-cancel').click(function(){
						
					
					$(this).siblings(".answer-comment-input").hide();
					$(this).siblings(".answer-comment-link").show();
					$(this).hide();
		
					});
					
					$('.edit-comment-block').hide();
					$('.edit-comment-link').click(function(){
						
					
					$(this).siblings(".edit-comment-block").show();
					
					$(this).hide();
		
					});
					
					$('.comment-edit-cancel').click(function(){
						
						
					
					$(this).parent().hide();
					$(this).parent().siblings(".edit-comment-link").show();
					$(this).parent().siblings(".view-comment-answer").children(".note-saved-block").hide();
					$(this).parent().siblings(".note-saved-block").hide();
					
					
		
					});
					
					
					$('.note-saved-block').hide();
					$('.comment-save-note').click(function(){
						
						
					
					
					$(this).parent().siblings(".view-comment-answer").children(".note-saved-block").show();
					$(this).parent().siblings(".note-saved-block").show();
					
					
		
					});
					
					
					
					
					$('.mobile-comment-holder').hide();
					$('.view-comment-btn-hover-mobile').click(function(){
					
					$('.mobile-comment-holder').fadeIn("slow");
					$('.mobile-article-top').addClass('hide-fix');
					$('.header-wrapper').addClass('hide-fix');
					$('body').addClass('disable-scroll');		
					
					
					});
					
					$('.cancel-mobile-comment').click(function(){
					
					$('.mobile-comment-holder').fadeOut("fast");
					$('.mobile-article-top').removeClass('hide-fix');
					$('body').removeClass('disable-scroll');	
					$('.header-wrapper').removeClass('hide-fix');	
					
					
					});
					
					$('.conmment-delete-confirm').hide();
					$('.comment-edit-delete').click(function(){
					
					$(this).parent().siblings(".conmment-delete-confirm").slideDown();

					
					
					});
					
					$('.comment-delete-no').click(function(){
						
						$(this).parent().slideUp();
					
					});
				
					
					
					$(".read-later-full").hide();
				$(".article-view-read-later").click(function(){
				
					
					$(this).children('.read-later-empty').toggle();
					$(this).children('.read-later-full').toggle();
					
				});
				
					$(".like-full").hide();
				$(".like-holder").click(function(){
				
					
					$(this).children('.like').toggle();
					$(this).children('.like-full').toggle();
					
				});
					
					
				
				});
				
				
				