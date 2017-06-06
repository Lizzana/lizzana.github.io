$(document).ready(function(){
	
	$('.sun').click(function(){		
		$('body').addClass('bodybg');
		$('.sun').fadeOut(1);
		$('.star').fadeIn(1);
	});
	$('.star').click(function(){		
		$('body').addClass('sunbg');
		$('.star').fadeOut(1);
		$('.sun').fadeIn(1);
	});
});
