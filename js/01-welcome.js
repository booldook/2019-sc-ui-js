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
//console.log(obj.src);
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

//data("src")	//jQuery
//getAttribute("data-src");	//es5
//dataset["src"];	//es6

//jQuery
$("#img4").mouseenter(function(){
	$(this).attr("src", $(this).data("hover"));
});
$("#img4").mouseleave(function(){
	$(this).attr("src", $(this).data("src"));
});
// es5
document.getElementById("img5").addEventListener("mouseenter", function(){
	this.src = this.getAttribute("data-hover");
});
document.getElementById("img5").addEventListener("mouseleave", function(){
	this.src = this.getAttribute("data-src");
});
// es6
document.querySelector("#img6").addEventListener("mouseenter", function(){
	this.src = this.dataset["hover"];
});
document.querySelector("#img6").addEventListener("mouseleave", function(){
	this.src = this.dataset["src"];
});