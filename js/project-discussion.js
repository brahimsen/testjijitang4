		 $(document).ready(function() {
			 
			 (function() {
   
	$(document).on('keyup', '.discussion-post-validation', function(){

        var empty = false;
        $('.discussion-post-validation').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#add-discussion-btn').attr('disabled', 'disabled');
        } else {
            $('#add-discussion-btn').removeAttr('disabled');
        }
    });
	
	 
	
})()



			$("#add-discussion-btn").click(function(e) {
    
           $(".discussion-list").prepend("<div class='discussion-post'><div class='discussion-post-header'><div class='discussion-post-meta'><a class='discussion-post-picture'><img src='img/profile1.jpg' /></a><p class='discussion-post-author'><a>Brahim Senhaji</p></a><p class='discussion-post-time'>September 28 | 12:33 A.M</p><button class='discussion-toggle-btn white-wide-btn discussion-btn-hidden'></button></div><p class='discussion-post-title'>"+$("#discussion-title-input").val()+"</p></div><div class='discussion-post-content'><p class='discussion-post-text'>"+$("#discussion-content-input").val()+"</p><div class='discussion-post-content-footer'><span class='discussion-comment-number'> 12 Replies | </span><span class='discussion-comments-toggle'></span><span class='discussion-comments-reply'>Reply</span></div><div class='discussion-comments-holder'><div class='discussion-comment-textarea'><textarea class='add-discussion-comment-textarea' placeholder='Share your thoughts on the discussion'></textarea><button class='black-wide-btn right-float-btn add-discussion-comment-btn'>SEND</button></div><div class='discussion-comment-list'></div></div></div></div></div>");
				
					$("#discussion-title-input").val('');
					$("#discussion-content-input").val('');
					$('#add-discussion-btn').attr('disabled', 'disabled');					


				});
				
				
				
				$(document).on('click', '.add-discussion-comment-btn', function(){
				
				if($.trim(($(this).siblings(".add-discussion-comment-textarea").val()).length) > 0) {
					
				$(this).parent(".discussion-comment-textarea").siblings(".discussion-comment-list").prepend("<div class='discussion-comment-row'><a><img src='img/brahim.png' /></a><p class='discussion-comment-meta'><a class='discussion-comment-name'>Brahim Senhaji</a><span class='discussion-comment-date'>September 18 | 13:54 A.M</span></p><p class='discussion-comment-text'>"+$(this).siblings(".add-discussion-comment-textarea").val()+"</p><div class='discussion-comment-edit-btns'><button class='black-wide-btn right-float-btn discussion-comment-edit-save' >SAVE</button><button class='red-wide-btn right-float-btn discussion-comment-edit-delete'>DELETE</button></div><a class='discussion-comment-edit'>Edit</a></div>");
				$(this).siblings(".add-discussion-comment-textarea").val("");
				
				}
				
				
				});
				
				
				$(document).on('click', '.discussion-comment-edit', function(){
				
				$(this).siblings(".discussion-comment-text").replaceWith("<textarea>" + $( this ).siblings(".discussion-comment-text").text() + "</textarea>");
				$(this).siblings(".discussion-comment-edit-btns").addClass("discussion-comment-edit-btns-show");
				$(this).addClass("discussion-comment-edit-hide");
				});
				
				
				$(document).on('click', '.discussion-comment-edit-save', function(){
				
				if($.trim(($(this).parent(".discussion-comment-edit-btns").siblings("textarea").val()).length) > 0) {
				
				
				
				$(this).parent(".discussion-comment-edit-btns").siblings("textarea").replaceWith("<p class='discussion-comment-text'>" + $( this ).parent(".discussion-comment-edit-btns").siblings("textarea").val() + "</p>");;
				$(this).parent(".discussion-comment-edit-btns").removeClass("discussion-comment-edit-btns-show");
				$(this).parent(".discussion-comment-edit-btns").siblings(".discussion-comment-edit").removeClass("discussion-comment-edit-hide");
				
				}
				
				});
				
				
				$(document).on('click', '.discussion-comment-edit-delete', function(){
				
				
				
				
				$(this).parent(".discussion-comment-edit-btns").parent(".discussion-comment-row").remove();
				
				
				
				
				});
   
});

	$(document).ready(function() {
			$(document).on('click', '.discussion-toggle-btn', function(){
			
    
					$(this).parent(".discussion-post-meta").parent(".discussion-post-header").siblings(".discussion-post-content").toggleClass("show-discussion-content")
					$(this).toggleClass("discussion-btn-visible");
				});
			});
			
				$(document).ready(function() {
					$(document).on('click', '.discussion-comments-reply', function(){
					
			
					$(this).siblings(".discussion-comments-toggle").addClass("discussion-comments-toggle-visible")
					$(this).parent(".discussion-post-content-footer").siblings(".discussion-comments-holder").addClass("discussion-comments-holder-visible");
				});
			});
			
			$(document).ready(function() {
					
					$(document).on('click', '.discussion-comments-toggle', function(){
			
					$(this).toggleClass("discussion-comments-toggle-visible")
					$(this).parent(".discussion-post-content-footer").siblings(".discussion-comments-holder").toggleClass("discussion-comments-holder-visible");
				});
			});