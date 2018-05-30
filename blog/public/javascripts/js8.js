$(document).ready(function() {
	var color1,color2;
	setInterval(randomColor1, 100);
	setInterval(randomColor2,100);
	function randomColor1() {
		color1 = "#"+Math.floor(Math.random()*256)+Math.floor(Math.random()*256)+Math.floor(Math.random()*256);
		$(".div3").css("color",color1);
		$(".div3").css("border-color",color1);
	}
	function randomColor2() {
		color2 = "#"+Math.floor(Math.random()*256)+Math.floor(Math.random()*256)+Math.floor(Math.random()*256);
		$(".div4").css("color",color2);
		$(".div4").css("border-color",color2);
	}
});