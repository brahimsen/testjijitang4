 $(document).ready(function() {
	 
	 			$(".collection-icon-full").hide();
				
				
				$(".collection-icon-empty").hide();
				$(".edit-collection-icon").hide();
				$(".collection-inner-content-holder").hover(function(){
					
					if($('.collection-icon-full',this).css("display") == "none"){
						      $('.collection-icon-empty',this).toggle();

					}
					
					$('.edit-collection-icon',this).toggle();

				
				});
				
				
				
			
				$(".collection-icon").click(function(){
						$(".collection-icon-empty,.collection-icon-full",this).toggle(
						
						
						);
					
						
								
				});
				
				$(".col-share-poup").hide();
					$(".share-col").click(function(e){
					
					
				$(".col-share-poup").toggle();
				$(".collection-popover-submit").hide();
					e.stopPropagation();
					
				
					
				});
				
					$("html").click(function(e){
					
					$(".col-share-poup").hide();
					
					
					
				
					
				});
				
				$(".collection-popover-submit").hide();
					$(".sub-collection").click(function(f){
					
					
				$(".collection-popover-submit").toggle();
				$(".col-share-poup").hide();
					f.stopPropagation();
					
				
					
				});
				
					$("html").click(function(f){
					
					$(".collection-popover-submit").hide();
					
					
					
				
					
				});
				
				
				
			});
			
				 $(document).ready(function() {
		 
		
			 
	     $(".collection-tooltip").tooltip({
			 
			 placement:'top'
			 
			 });
			 
			   $(".collection-icon").tooltip({
			 
			 placement:'bottom'
			 
			 });
				
			 
			 
			 
			
		 
	 });

