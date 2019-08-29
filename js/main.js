
		$(function() {
			$('#item').on('keyup', function(e) {
				var input = $(this);
			
				//13 klavye enter kod
				if(e.keyCode == 13 && input.val() != '') {
					var task = $('<div class="task" />').text( input.val() );
					
					var del = '<i class="fas fa-trash-alt remove text-danger"></i>';
					var check = '<i class="fas fa-check check"></i>';
					task.append(del, check);

					$('.notcomp').append( task );

					// delete
					input.val('');
				}
			});


			$(document).on('click', '.remove', function(){
				var p = $(this).parent();
				p.fadeOut(500, function() {
					$(this).remove();
				});
			});

			$(document).on('click', '.check', function() {
				var el = $(this).parent();
				var isSelected = el.hasClass('completed');
				el.removeClass('completed');

				if (!isSelected) {
					el.addClass('completed');
				}
			});
		});
	