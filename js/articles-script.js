
$(document).ready(function() {
	
	
	
oTable = $('#example').dataTable({
   
   
 
  "oLanguage": {
    "sSearch": "",
  }
});
} ); 

	

$(window).scroll(function(){
	
		
  
      scroll = $(window).scrollTop();
	  
	
	  
	 

  if (scroll >= 50 && $(window).width() < 980 ) {
	  
	 
	  
	  
	  
	  
	  
	   $('.article-sub-navigation ').addClass('fix-icon-banner-to-top');
	   $('.article-sub-navigation ').css("padding-top","10px");
	    
	   
  
  $('.article-left-mobile-wrapper').addClass('minus-twenty-top'); }
  
  
  else{ $('.article-sub-navigation ').removeClass('fix-icon-banner-to-top'); $('.article-sub-navigation ').css("padding-top","15px");
  
  
   }


	

});



$(document).ready(function(){


  $("#example_filter").append("<div class='main-page-right-tab'><div class='show-graph-articles'><span class='icon3-file'></span></div><div class='show-list-articles'><span class='icon3-list'></span></div></div>")


});

$(document).ready(function(){
	
	
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
	
	
	
	
	$('.articles-list-view').hide();
	$(".show-list-articles").click(function() {
		$('.articles-graphic-view').hide();
		$('.articles-list-view').show();
		
		
		});
	$(".show-graph-articles").click(function() {
		$('.articles-graphic-view').show();
		$('.articles-list-view').hide();
		
		
		});
	
	
	});
	
	
$(document).ready(function(){
    var videoPath = "videos/lg/";
    var draggedItem = null; 
    $('.segmentListItem').each(function(index){
        $(this).on("dragstart", handleDragStart);
        $(this).on("drop", handleDrop);
        $(this).on("dragover", handleDragOver);
    });

function handleDragStart(e){
        //console.log('start');
        draggedItem=this;
        e.originalEvent.dataTransfer.effectAllowed = 'move';
        //e.dataTransfer.dropEffect = 'move'; //MH - do we need both of these?
        e.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
          if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
          }
          e.originalEvent.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
          return false;
    }

    function handleDrop(e){
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        if (draggedItem != this) { //MH - swap if we're not dragging the item onto itself
            var copy=$(this).clone(true,true);
            $(this).replaceWith($(draggedItem).clone(true,true));
            $(draggedItem).replaceWith($(copy).clone(true,true));
        } 
        return false;
    }    
    
});