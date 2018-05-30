$(document).ready(function() {
	document.getElementById("xiugai").addEventListener("click", function(e) {
		var elements = document.getElementsByTagName("input");
		for(var i = 0;i<elements.length;i++) {
			elements[i].removeAttribute("readonly");
		}
		elements[0].focus();
	});
	document.getElementById("sure").addEventListener("click", function(e) {
		var elements = document.getElementsByTagName("input");
		for(var i = 0;i<elements.length;i++) {
			elements[i].setAttribute("readonly","readonly");
		}
		alert("修改成功！");
	});

		

});