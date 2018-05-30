$(document).ready(function() {
	$('.home a').click(function() {
		if(confirm("只有进行登录才可以继续访问喔！")) {
			return true;
		}else {
			return false;
		}
	});
});