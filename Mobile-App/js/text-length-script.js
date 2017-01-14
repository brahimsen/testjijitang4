
$(document).ready(function(){
  var limitnum = 100; // set your int limit for max number of characters
  
  function limiting(obj, limit) {
    var cnt = $("#bio-counter > span");
    var txt = $(obj).val(); 
    var len = txt.length;
    
    // check if the current length is over the limit
    if(len > limit){
       $(obj).val(txt.substr(0,limit));
       $(cnt).html(len-1);
     } 
     else { 
       $(cnt).html(len);
     }
     
    
  }


  $('#shortbio').keyup(function(){
    limiting($(this), limitnum);
  });
});

$(document).ready(function(){
  var limitnum = 1000; // set your int limit for max number of characters
  
  function limiting(obj, limit) {
    var cnt = $("#exp-counter > span");
    var txt = $(obj).val(); 
    var len = txt.length;
    
    // check if the current length is over the limit
    if(len > limit){
       $(obj).val(txt.substr(0,limit));
       $(cnt).html(len-1);
     } 
     else { 
       $(cnt).html(len);
     }
     
    
  }


  $('#reserachexp').keyup(function(){
    limiting($(this), limitnum);
  });
});