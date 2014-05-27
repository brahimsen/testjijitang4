 $(document).ready(function() {
	 
	 			$(".collection-icon-full").hide();
				
				
				$(".collection-icon-empty").hide();
				$(".collection-inner-content-holder").hover(function(){
					
					if($('.collection-icon-full',this).css("display") == "none"){
						      $('.collection-icon-empty',this).toggle();

					}
					
					
				
				});
				
			
				$(".collection-icon").click(function(){
						$(".collection-icon-empty,.collection-icon-full",this).toggle(
						
						
						);
					
						
								
				});
				
				
				
			});