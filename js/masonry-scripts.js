$(window).load(function(){
$('#collection-columns').masonry({
  itemSelector: '.collection-grid-item',
  percentPosition: true,
  gutter: 20
});

$('#project-columns').masonry({
  itemSelector: '.project-square-grid-item',
  percentPosition: true,
  gutter: 20
});
$('#profile-columns').masonry({
  itemSelector: '.profile-grid-item',
  percentPosition: true,
  gutter: 20
});
$('.article-columns').masonry({
  itemSelector: '.square-grid-item',
  percentPosition: true,
  gutter: 20
});
$('.publication-columns').masonry({
  itemSelector: '.publication-grid-item',
  percentPosition: true,
  gutter: 40
});
});