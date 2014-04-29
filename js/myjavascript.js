$( document ).ready(function() {
	$("#search-text").hide();
  $("#search-btn").click(function(){
	  if($("#search-text").val() == ""){
    $("#search-text").toggle( "slide" );
	  }
	  else {
		  alert("nihaaaaaaao")
	  }
});
});

$(document).ready(function () {
    size_li = $(".pick-post").size();
    x=5;
    $('.pick-post:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('.pick-post:lt('+x+')').show();
    });
  
});

$(document).ready(function () {
    size_li = $(".all-submit-post").size();
    x=5;
    $('.all-submit-post:lt('+x+')').show();
    $('#loadMoresubmit').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('.all-submit-post:lt('+x+')').show();
    });
  
});

$(document).ready(function() {
	$("#submit-abstract").click(function(){
$("[rel='popover']").popover({
html: 'true', 
content : '<div id="popOverBox">Your Text Here</div>'
});
});
});



	$(document).ready(function(){
		$("#Sign-in-Modal").modal('show');
		$("#signup-link").click(function(){
				$("#Sign-in-Modal").modal('hide');
				$("#Sign-up-Modal").modal('show');


		});
		$("#Login-link").click(function(){
				$("#Sign-up-Modal").modal('hide');
				$("#Sign-in-Modal").modal('show');


		});
		
		$("#get-in").click(function(){
				$("#Sign-in-Modal").modal('hide');
				$("#trans-Modal").modal('show');


		});
		
		$("#get-up").click(function(){
				$("#Sign-up-Modal").modal('hide');
				$("#trans-Modal").modal('show');


		});
	});
	
	$(window).load(function() {
	
	
	$(".ad-wrapper").show("slide", { direction: "up" }, 8000);

});

$(document).ready(function() {
	$("#close-add").click(function(){
		$(".ad-wrapper").hide();

		

});
});
