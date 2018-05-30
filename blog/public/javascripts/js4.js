$(document).ready(function() {
	$('#button').click(function() {
		if(confirm("只有进行登录才可以继续关注喔！")) {
			return true;
		}else {
			return false;
		}
	});
});