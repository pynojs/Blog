$(document).ready(function() {
	$("#submit").click(function() {
		if($("textarea").val().trim() == "") {
			alert("请献出您宝贵的意见！谢谢！");
		}
		if($("textarea").val().trim() != "") {
			$.post("/comment",{comment: $("textarea").val()},function(data) {
			alert(data);
			location.href = "/haidaozhixia";
			});
		}
		
	});
});