	  	$(document).ready(function(){
		
		
			
		
		var id = 0;
$('.add-section').click(function () {
	
		id = id +1;
		idstring = id.toString();
		sectionid = 'section'+idstring;
		
		
	
		$(".editor").append('<div id="' +sectionid+ '"><div class="new-editable section-title" id="' +sectionid+ 'title"  data-placeholder="Section Title..."></div><div class="new-editable section-content" id="' +sectionid+ 'content"  data-placeholder="Section Content..."></div></div><div data-placeholder="..." class="blank-section" class="new-editable" id="' +sectionid+ 'blank"></div>');
		
		 var editor = new MediumEditor('#'+sectionid+'title', {
      excludedActions: ['u', 'h3', 'blockquote'],
      buttonLabels: 'fontawesome'
    });
	
		 var editor = new MediumEditor('#'+sectionid+'content', {
      excludedActions: ['u', 'h3', 'blockquote'],
      buttonLabels: 'fontawesome'
    });
	
		 var editor = new MediumEditor('#'+sectionid+'blank', {
      excludedActions: ['u', 'h3', 'blockquote'],
      buttonLabels: 'fontawesome'
    });
					
    $(function () {
      $('#'+sectionid+'title').mediumInsert({
        editor: editor,
        addons: {
          images: {},
          embeds: {},
          tables: {}
        }
      });
	   $('#'+sectionid+'content').mediumInsert({
        editor: editor,
        addons: {
          images: {},
          embeds: {},
          tables: {}
        }
      });
	    $('#'+sectionid+'blank').mediumInsert({
        editor: editor,
        addons: {
          images: {},
          embeds: {},
          tables: {}
        }
      });
    });

	
	});

});
  
  
    var editor = new MediumEditor('.editable', {
      excludedActions: ['u', 'h3', 'blockquote'],
      buttonLabels: 'fontawesome'
    });

    $(function () {
      $('.editable').mediumInsert({
        editor: editor,
        addons: {
          images: {},
          embeds: {},
          tables: {}
        }
      });
    });

  
  
  
  
  $(document).ready(function(){
			
			$("#mediumInsert-0").children(".mediumInsert-buttons").find("button").css({"opacity" : "1", "transform":"scale(1)"})
			$("#mediumInsert-0").children(".mediumInsert-buttons").find(".editor-headings").css({"opacity" : "1", "transform":"scale(1)"})
			
			$("#first-line-placeholder").click(function(){
					
					$(this).remove();
					
					
					
				});
			
			
			
			$(".editor-headings-inner").hide();
			
		});
  
  		$(document).on('click', '.editor-headings', function(e){
			
			$(this).children(".editor-headings-inner").addClass("editor-headings-inner-active")
			e.stopPropagation
			
		});
		
		$("html").click(function(e){
		  $(".editor-headings-inner").removeClass("editor-headings-inner-active")
		  
	  });
	  
	  $(document).on('click', '.mediumInsert-buttonsShow', function(e){
			
			$(this).siblings(".mediumInsert-buttonsOptions").addClass("display-button-imp");
			e.stopPropagation
			
		});
		
		$("html").click(function(e){
		  $(".mediumInsert-buttonsOptions").removeClass("display-button-imp");
		  
	  });
	  
	  
  
  	
		
		$(document).on('click', 'p,h1,h2,h3', function(){
			
			$(this).next().children(".mediumInsert-buttons").find("button").css({"opacity" : "1", "transform":"scale(1)"})
			$(this).next().children(".mediumInsert-buttons").find(".editor-headings").css({"opacity" : "1", "transform":"scale(1)"})
			$("p,h1,h2,h3").not(this).next().children(".mediumInsert-buttons").find("button").css({"opacity" : "0", "transform":"scale(0)"})
			
			$("p,h1,h2,h3").not(this).next().children(".mediumInsert-buttons").find(".editor-headings").css({"opacity" : "0", "transform":"scale(0)"})
	
		});
		
		
		
		$(document).on('click', '.editor-comment', function(){
			
			$(this).children(".editor-comment-pop").css({"display" : "block"})
			$(".editor-comment").not(this).children(".editor-comment-pop").css({"display" : "none"})
			
		});
		
		$(document).on('click', '.editor-headings-normal', function(){
			
			$(this).parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev().contents().unwrap().wrap('<p/>');
		$(this).parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev("p").parent(".editable").blur();
		
			
			
			
		});
		
		$(document).on('click', '.editor-headings-h1', function(){
			
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev().contents().unwrap().wrap('<h1/>');
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev("h1").parent(".editable").blur();
		
			
			
			
		});
		
		$(document).on('click', '.editor-headings-h2', function(){
			
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev().contents().unwrap().wrap('<h2/>');
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev("h2").parent(".editable").blur();
			
			
			
		});
		
		$(document).on('click', '.editor-headings-h3', function(){
			
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev().contents().unwrap().wrap('<h3/>');
			$(this).parent(".editor-headings-hs").parent(".editor-headings-inner").parent(".editor-headings").parent(".mediumInsert-buttons").parent(".mediumInsert").prev("h3").parent(".editable").blur();
			
			
			
		});
		
		
		
  