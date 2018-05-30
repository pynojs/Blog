$(document).ready(function() {
	/*window.setInterval(add, 500);
	window.setInterval(remove,1001);
	function add() {
		$('#div').addClass('div4');
	};
	function remove() {
		$('#div').removeClass('div4');
	};*/
	window.setTimeout(function() {
		$('.div5').css('visibility','visible');
	},300);
	window.setTimeout(function() {
		$('.div6').css('visibility','visible');
	},600);
	window.setTimeout(function() {
		$('.div7').css('visibility','visible');
	},900);
	window.setTimeout(function() {
		$('.div8').css('visibility','visible');
	},1200);
	window.setTimeout(function() {
		$('.div5').hide(1500);
	}, 3000);
	window.setTimeout(function() {
		$('.div6').hide(1500);
	}, 2500);
	window.setTimeout(function() {
		$('.div7').hide(1500);
	}, 2000);
	window.setTimeout(function() {
		$('.div8').hide(1500);
	}, 1500);

	
});


