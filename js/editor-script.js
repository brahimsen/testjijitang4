	$(document).ready(function(){
		
		$("#publish-article").click(function(){
		$("#Publish-article-Modal").modal('show');

	});
	
	$("#delete-article").click(function(){
		$("#Delete-article-Modal").modal('show');

	});
			

    });

  
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

    