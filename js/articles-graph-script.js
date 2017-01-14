$(document).ready(function() {
oTable = $('.example').dataTable({
    "oLanguage": {
    "sSearch": "",
  },
"lengthMenu": [[5, 6, 7, -1], [5, 6, 7, "All"]]
});
} ); 


$(document).ready(function() {

			$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
	
			 $(".article-graph-save").click(function(f){
						$(this).siblings(".article-graph-save-drop").toggleClass("article-graph-save-hide");
						$(".article-graph-share").removeClass("article-graph-save-hide");
						
					
						
								
				});
				
				
				
					 $(".article-graph-share-btn").click(function(e){
						$(".article-graph-share",this).toggleClass("article-graph-save-hide");
						$(".article-graph-save-drop").removeClass("article-graph-save-hide");
					e.stopPropagation();
						
								
				});
				
				
				
				$("html").click(function(e){
					
					$(".article-graph-share").removeClass("article-graph-save-hide");
		
				});
				
				
				
	
	$(".read-later-full").hide();
				$(".read-later-holder").click(function(){
					
					
					$(this).children('.read-later-empty').toggle();
					$(this).children('.read-later-full').toggle();
					
				});
				
	
	

});

	
 $(document).ready(function() {
				
				$(".like-holder").click(function(){
					$('.like,.like-full').toggleClass("hide-like-btn");
				
				});
			});
				

