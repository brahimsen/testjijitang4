
		
		$(document).ready(function() {
					
			$(document).on('click', '#send-invitation-action', function(){
			
					if($("#invitee-email").val() !="" && $("#invitee-role").val() !="") {
					
					$("#invitation-row-section").prepend("<div class='invitation-row'><div class='invitation-email'><p>" + $("#invitee-email").val() + "</p></div><div class='invitation-role'><input type='text' value='" + $("#invitee-role").val() + "' /></div><div class='invitation-type'><span class='invitation-type-content'>" + $('input[name=privacy]:checked').val() + "<i class='fa fa-caret-down'></i></span></div><div class='invitation-remove dropdown'><span data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' class='lnr lnr-cross'></span><div class='dropdown-menu' aria-labelledby='dLabel'><button class='delete-invitation-row-btn'>Delete</button><button class='cancel-small-btn'>Cancel</button></div></div></div>");
					
						$("#invitee-email").val("");
						$("#invitee-role").val("");
						$("#invitationmessage").val("");
						$("#add-member-alert-validation").removeClass("add-member-alert-show");
						
					
					}else{
					$("#add-member-alert-validation").addClass("add-member-alert-show");
					
					
					}
			});
	
			$(document).on('click', '.invitation-type-content', function(){
		
					$(this).replaceWith("<select><option value'Admin'>Admin</option><option value='Collaborator'>Collaborator</option></select>");;
					
			});	
			
			$(document).on('click', '.delete-invitation-row-btn', function(){
			
								$(this).parent(".dropdown-menu").parent(".invitation-remove").parent(".invitation-row").remove();

		
					
			});	


				
			
			
			});