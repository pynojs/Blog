$(document).ready(function() {
	$(".close").click(function() {
		$(".doa").fadeOut(2000);
	});
	var doa = document.getElementById('doa');  
    var distX = 0;  
    var distY = 0;  
    doa.onmousedown = function(ev) {  
        var event = ev || window.event;  
        distX = event.pageX - doa.offsetLeft-126;
        distY = event.pageY - doa.offsetTop;
        document.onmousemove = function(ev){  
            var event = ev || window.event;  
            var x = event.pageX - distX;  
            var y = event.pageY - distY;
	        doa.style.left = x + 'px';
	        doa.style.top = y + 'px'; 
    	}
        document.onmouseup=function(){  
	        document.onmousemove=null;  
	        document.onmouseup=null;  
        }  
    }
                  




});