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
		$(".sign-in-alert").hide();
		$("#signup-link").click(function(){
				$("#Sign-in-Modal").modal('hide');
				$("#index-Sign-in-Modal").modal('hide');
				$("#Sign-up-Modal").modal('show');


		});
		$("#Login-link").click(function(){
				$("#Sign-up-Modal").modal('hide');
				$("#Sign-in-Modal").modal('show');


		});
		
		$("#submitabstract").click(function(){
				$("#trans-Modal").modal('hide');
				$("#trans-submitted-Modal").modal('show');


		});
		
		
		$("#get-in").click(function(){
			
				if( $("#emailsign").val() == "jijitang" && $("#passsign").val() == "jijitang" ){
				$("#Sign-in-Modal").modal('hide');
				$("#trans-Modal").modal('show');
			}
				
				else {
			$(".sign-in-alert").fadeIn(500)
			
			}

		});
		
		$("#get-up").click(function(){
				$("#Sign-up-Modal").modal('hide');
				$("#trans-Modal").modal('show');


		});
	});
	
	


	
				
				/* <![CDATA[ */
			jQuery(document).ready(function($) {
			
				
				
				$("#ex3a").popover({
					content: "<p class='popover-top'>Submit My Abstract</p><p class='popover-text'>You don't have any note available to submit, create a note</p><span style='margin-top: 20px !important' class='main-button'><a>Create a Note</a></span>",
					trigger: 'none'
					
					
					
					/*
					
					The Followind is the front End Code that Is supposed to show up in case there is a note, Usually an if Else statement should do it but in case you cannot trigger this code, we can find another way on how to develop it. Good Luck Xu
					
					content: "<p class='popover-top'>Submit My Abstract</p><p class='popover-text'>Select a not a push it to this topic</p><span style='margin-top: 20px !important' class='main-button'><a>Create a Note</a></span>",
					trigger: 'none'*/
					
				});
				$("#submit-abstract-popover").click(function(event) {
					event.preventDefault();
					event.stopPropagation();
					$("#ex3a").popover('show');
				});
			
	
		
			
			});
		/* ]]> */
		
		


$(window).ready(function() {
	
	
	setTimeout(function(){
        $('.adver-wrapper').show("slide", { direction: "up" }, 1000);
    }, 1000);

});


