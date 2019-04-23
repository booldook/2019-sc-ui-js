document.getElementById("bt_date").addEventListener("click", function(){
	console.log(document.querySelectorAll("h3"));
	//console.log(document.getElementsByTagName("h3"));
	//document.getElementsByTagName("h3")[0].innerHTML = new Date();
	//document.getElementById("display").innerHTML = new Date();
	document.querySelectorAll("h3")[0].innerHTML = new Date();
});

document.getElementById("bt_reset").addEventListener("click", function(){
	//document.getElementById("display").innerHTML = '';
	//document.getElementsByTagName("h3")[0].innerHTML = '';
	document.querySelectorAll("h3")[0].innerHTML = '';
});

// 전구 jQuery
$("#bt_on").click(function(){
	$("#img1").attr('src', '../img/pic_bulbon.gif');
});
$("#bt_off").click(function(){
	$("#img1").attr('src', '../img/pic_bulboff.gif');
});

var obj = {
	src: null,
	id: null
} 
obj.src = 'aaaa';
console.log(obj.src);
// 전구 ES5
document.getElementById("bt_on2").addEventListener("click", function(){
	var src = document.getElementById("img2").src;
	document.getElementById("img2").src = '../img/pic_bulbon.gif';
});
document.getElementById("bt_off2").addEventListener("click", function(){
	//document.getElementById("img2").src = '../img/pic_bulboff.gif';
	var src = document.getElementById("img2").getAttribute("src");
	document.getElementById("img2").setAttribute("src", "../img/pic_bulboff.gif");
});

// 전구 ES6
document.querySelector("#bt_on3").addEventListener("click", function(){
	document.querySelector("#img3").src = '../img/pic_bulbon.gif';
});
document.querySelector("#bt_off3").addEventListener("click", function(){
	document.querySelector("#img3").src = '../img/pic_bulboff.gif';
});