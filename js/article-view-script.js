
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
	$('.answer-comment-link-save').hide();
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
				
				if($(window).width() >= 980) {
				
				
				$('.article-left-wrapper').animate({"width":"hide","opacity":"hide" });
				$('.article-title').animate({"margin-left":"2%" });
				
				
				if($('.article-left-wrapper').css("display") == "block") {
				$('.article-right').animate({"width":"95.5%"});
				
				}
				
				
				
				$('.view-comment-section').hide();
				$('.view-comment-section',this).toggle();
					e.stopPropagation();
				
					}
					
					else {
					
					
					$('#view-comment-Modalshow').modal();
					
					}
					
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
				
			
			
				$(".article-view-tab-content").hover(function(){
				
					
				
				$('.view-comment-btn',this).toggleClass('comment-button-hovered');
				
					
				
					
					
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
					
					 $(this).parent().siblings(".article-main-comment-field").val("");
					 $(this).parent().siblings(".article-main-comment-field").css("height","30px");
					 $(this).parent().parent().parent().parent().hide();
					 $(this).parent().parent().parent().parent().siblings(".comment-add-note-for").fadeIn();
					 
				
					
					
					
					});
					
					$(".view-write-comment").hide();
					$('.comment-add-note-for').click(function(){
					
					 $(this).siblings(".view-write-comment").fadeIn();
					 $(this).hide();
					 
					 
				
					
					
					
					});
					
					
					
					$('.answer-comment-link').click(function(){
						
					
					$(this).siblings(".answer-comment-input").fadeIn();
					$(this).siblings(".answer-comment-link-cancel").fadeIn();
					$(this).siblings(".answer-comment-link-save").fadeIn();
					$(this).siblings(".note-saved-block").hide();
					$(this).hide();
		
					});
					
					$('.answer-comment-link-cancel').click(function(){
						
					
					$(this).siblings(".answer-comment-input").hide();
					$(this).siblings(".answer-comment-link").fadeIn();
					$(this).siblings(".answer-comment-input").children("input").val("");
					$(this).hide();
					$(this).siblings(".answer-comment-link-save").hide();
		
					});
					
					$('.edit-comment-block').hide();
					$('.edit-comment-link-parent').click(function(){
						
					
					$(this).parent().siblings(".edit-comment-block").show();
					$(this).siblings(".comment-collapse-link").hide();
					
					var height = $(this).parent().siblings(".display-comment-text").height();
				
					$(this).parent().siblings(".display-comment-text").contents().unwrap().wrap("<textarea style='width: 100%; border: none; box-shadow: none; margin-top: -16px; font-size: 13px; color: #333; margin-left: 7px; margin-bottom: 0px'></textarea>");
					$(this).parent().siblings("textarea").focus();
					$(this).parent().siblings("textarea").css("height",height);
					
					$(this).hide();
		
					});
					
					$(".view-comment-answer").hide();
					$('.comment-collapse-link').click(function(){
						
						var txt = $(this).parent(".edit-comment-link").siblings(".view-comment-answer").is(':visible') ? '+ show replies' : '- hide replies';
     					$(this).text(txt);
						
						$(this).parent(".edit-comment-link").siblings(".view-comment-answer").slideToggle( "slow" );
						
						});
					
					$('.edit-comment-link-child').click(function(){
						
					
					$(this).siblings(".edit-comment-block").show();
					
					var height = $(this).siblings(".display-comment-text").height();
				
					$(this).siblings(".display-comment-text").contents().unwrap().wrap("<textarea style='width: 100%; border: none; box-shadow: none; margin-top: -9px; font-size: 13px; color: #333; margin-left: -6px'></textarea>");
					$(this).siblings("textarea").focus();
					$(this).siblings("textarea").css("height",height);
					
					$(this).hide();
		
					});
					
					$('.comment-edit-cancel').click(function(){
						
						
					$(this).parent().siblings(".edit-comment-link").children(".comment-collapse-link").show();
					$(this).parent().hide();
					$(this).parent().siblings(".edit-comment-link").children(".edit-comment-link-parent").show();
					$(this).parent().parent().siblings(".view-comment-answer").children(".note-saved-block").hide();
					$(this).parent().siblings(".note-saved-block").hide();
					$(this).parent().siblings("textarea").contents().unwrap().wrap("<p class='display-comment-text'></p>");
					
					
					
		
					});
					
					$('.comment-edit-cancel').click(function(){
						
						
					
					$(this).parent().hide();
					$(this).parent().siblings(".edit-comment-link-child").show();
					$(this).parent().siblings(".view-comment-answer").children(".note-saved-block").hide();
					$(this).parent().siblings(".note-saved-block").hide();
					$(this).parent().siblings("textarea").contents().unwrap().wrap("<p class='display-comment-text'></p>");
					
					
					
		
					});
					
					$(".update-comment-fade").hide();
					
					$('.comment-save-note').click(function(){
						
						
						var newtext = $(this).parent().siblings("textarea").val();
						
						$(this).parent().siblings(".edit-comment-link").show();
						$(this).parent().siblings(".edit-comment-link").children(".comment-collapse-link").show();

						$(this).parent().siblings("textarea").contents().unwrap().wrap("<p class='display-comment-text'></p>");
						$(this).parent().siblings(".display-comment-text").text(newtext);
						$(this).parent().siblings(".edit-comment-link").children(".edit-comment-link-parent").show();
						$(this).parent().siblings(".comment-author-name-holder").children(".update-comment-fade").fadeIn(1000);
						setTimeout($(this).parent().siblings(".comment-author-name-holder").children(".update-comment-fade").fadeOut(), 3000 );
						$(this).parent().siblings(".note-saved-block").hide();
						$(this).parent().hide();
						
				
					});
					
					
					$('.note-saved-block').hide();
				
					$('.mobile-comment-holder').hide();
					
					
					
					
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
				
				
	