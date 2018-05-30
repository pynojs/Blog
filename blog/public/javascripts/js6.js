$(document).ready(function() {
	//console.log($("#hidden").val());
	

	$("button").click(function() {
		var hiddenPassword = $("#hidden").val().trim();
		var hiddenId = $("#hidden2").val().trim();
		var shuruPassword = $("#password1").val().trim();
		var newPassword = $("#password2").val().trim();
		var newPasswordAgain = $("#password3").val().trim();
		if(hiddenPassword == shuruPassword) {
			if(newPassword == newPasswordAgain) {
				var xmeHttp;
				(function createXmlHttpRequest() {
					if(window.ActiveXObject) {
						xmlHttp = new ActiveXObject("Microsoft.xmlHTTP");
					}else if(window.XMLHttpRequest) {
						xmlHttp = new XMLHttpRequest();
					}
				}()
				)
				var url = "/user/xiugaimima/"+hiddenId+"?newPassword="+newPassword;
				xmlHttp.open("post",url,true);
				xmlHttp.send(null);
				xmlHttp.onreadystatechange = function() {
					if(xmlHttp.readyState == 4) {
						if(xmlHttp.status == 200) {
							alert("密码修改成功！");
							window.location.reload();
						}
					}
				};
				
			}else {
				alert("两次输入的新密码不一致，请重新输入！");
				$("#password2").val("");
				$("#password3").val("");
				$("#password2").focus();
			}
		}else {
			alert("原始密码输入错误，请重新输入！");
			$("#password1").val("");
			$("#password2").val("");
			$("#password3").val("");
			$("#password1").focus();
		}
	});
});