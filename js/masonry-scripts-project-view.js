$(window).load(function(){

$('.article-columns').masonry({
  itemSelector: '.my-document-grid-item',
  percentPosition: true,
  gutter: 20
});

$('a[data-toggle=tab]').each(function () {
        var $this = $(this);

        $this.on('shown.bs.tab', function () {
        
           $('.article-columns').masonry({
				itemSelector: '.my-document-grid-item',
				percentPosition: true,
				gutter: 20
			});
			

        }); //end shown
    });  //end each

});