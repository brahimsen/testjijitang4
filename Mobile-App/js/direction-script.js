$(function(){
  $('.new').submit(function () {
    // ADD ITEM
    if ( $('#new').val() !== '' ) {
	
		
      var item = $('#new').val(),
	  
			
	  
          input = '<input type="text" value="' + item + '" />',
          edit = '<ol><li class="check lnr lnr-pencil"></li><li class="delete lnr lnr-cross"></li></ol>';
		  
      $('.list').append('<li class="item">' + input + edit + '</li>');
    };
    // CLEAR INPUT
    $('#new').val('');
    // COLORS
    
    // CHECK & DELETE
    $('.direction-tag-list .list .item ol li').on('click',function(){
      if ( $(this).hasClass('check') ) {
        $(this).parent('ol').parent('.item').find('input').toggleClass('checked');
      } else if ( $(this).hasClass('delete') ) {
        $(this).parent('ol').parent('.item').remove();
      }
    });
    return false;
  });
  // COLORS
  
  // CHECK & DELETE
  $('.direction-tag-list .list .item ol li').on('click',function(){
    if ( $(this).hasClass('check') ) {
      $(this).parent('ol').parent('.item').find('input').toggleClass('checked');
    } else if ( $(this).hasClass('delete') ) {
      $(this).parent('ol').parent('.item').remove();
    }
  });
});
