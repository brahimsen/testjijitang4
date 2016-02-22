$(document).ready(function(){
    $("#add-tag-btn").click(function(){
		
		
       $(".tag-list").append(" <p><span class='tag-text'>"+$("#add-tag-input").val()+"</span><span class='icon-remove tag-icon'></span></p>");
	   $("#add-tag-input").val('')
    });
 
});

 $(".tag-icon").live('click', function(){
	 
	 $(this).parent().remove()
   
});
 
 
 $(window).on("load",function() {
	
	function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#menuBarDiv').addClass('sticka');
		
    } else {
        $('#menuBarDiv').removeClass('sticka');
		
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
});

