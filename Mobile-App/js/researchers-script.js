	
	
	
	
var $checkboxes;

function storeuser() {         
    var users = $checkboxes.map(function() {
        if(this.checked) return '<span class="direction-span">' + this.name + '</span>';
    }).get();
    $('#selected-interests').html(users); 
}

$(function() {
    $checkboxes = $('#interests-checkbox input:checkbox').change(storeuser);
});
	
