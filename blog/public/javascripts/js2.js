$(document).ready(function() {
	$("#zhuce").click(function() {
		if($("#name").val().trim() == "") {
			alert("请输入姓名！");
			return false;
		}
		if($("#password").val().trim() == "") {
			alert("请输入密码！");
			return false;
		}
		if($('#password').val().trim() == $('#password_again').val().trim()) {
			var formData = {
			name: $("#name").val(),
			password: $("#password").val(),
			birth: $("#birth").val(),
			constellation: $("#constellation").val(),
			tel: $("#tel").val(),
			hometown: $("#hometown").val(),
			place: $("#place").val(),
			profession: $("#profession").val()

		};
		$.ajax({
			url: "/reg",
			type: "POST",
			data: formData,
			success: function(data) {
				if(data == "0") {
					alert("此用户已被注册，请重新注册");
					$("#name").val("");
					$("#password").val("");
					$("#password_again").val("");
				}
				if(data == "1") {
					window.setTimeout(function() {
						location.href = "/haidaozhixia"
					}, 500);
				}
			}
		});

		} else {
			alert("密码与确认密码不一致，请重新输入！");
			$('#password').val("");
			$('#password_again').val("");
			return false;
		}

	});
});