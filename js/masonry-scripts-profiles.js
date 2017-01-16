$(window).load(function(){

$('#project-columns-created').masonry({
  itemSelector: '.project-square-grid-item',
  percentPosition: true,
  gutter: 20
});

$('#project-columns-saved').masonry({
  itemSelector: '.project-square-grid-item',
  percentPosition: true,
  gutter: 20
});

$('#article-columns-created').masonry({
  itemSelector: '.square-grid-item',
  percentPosition: true,
  gutter: 20
});

$('#article-columns-liked').masonry({
  itemSelector: '.square-grid-item',
  percentPosition: true,
  gutter: 20
});

$('#collection-columns-created').masonry({
				itemSelector: '.collection-grid-item',
				percentPosition: true,
				gutter: 20
			});
			
			$('#collection-columns-saved').masonry({
				itemSelector: '.collection-grid-item',
				percentPosition: true,
				gutter: 20
			});

 $('a[data-toggle=tab]').each(function () {
        var $this = $(this);

        $this.on('shown.bs.tab', function () {
        
           $('#project-columns-created').masonry({
				itemSelector: '.project-square-grid-item',
				percentPosition: true,
				gutter: 20
			});
			
			 $('#project-columns-saved').masonry({
				itemSelector: '.project-square-grid-item',
				percentPosition: true,
				gutter: 20
			});
			
			$('#article-columns-created').masonry({
				itemSelector: '.square-grid-item',
				percentPosition: true,
				gutter: 20
			});

			$('#article-columns-liked').masonry({
				itemSelector: '.square-grid-item',
				percentPosition: true,
				gutter: 20
			});
			
			$('#collection-columns-created').masonry({
				itemSelector: '.collection-grid-item',
				percentPosition: true,
				gutter: 20
			});
			
			$('#collection-columns-saved').masonry({
				itemSelector: '.collection-grid-item',
				percentPosition: true,
				gutter: 20
			});

        }); //end shown
    });  //end each

});