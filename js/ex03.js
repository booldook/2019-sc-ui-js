/*
$("#bt_move").click(function(){
	// width() => 순수한 내용(content)의 크기 => box-sizing: content-box
	// innerWidth() => content + padding 
	// outerWidth() => content + padding + border => box-sizing: border-box
	// outerWidth(true) => content + padding + margin
	var stageWid = $(".stage").outerWidth();
	var boxWid = $(".box").outerWidth();
	var tar = stageWid - boxWid;
	$(".box").stop().animate({"left": tar+"px"}, 2000);
});
$("#bt_reset").click(function(){
	$(".box").css({"left": 0});
});
*/

/*
var jumbo = document.querySelector(".jumbotron");
var jumboCSS = getComputedStyle(jumbo, null);
var str = "abcdef";
var str2 = str.replace("cd", "ab");
//console.log(str);
//console.log(str2);
function gen(str) {
	return Number(str.replace("px", ""));
}

var stage = document.querySelector(".stage");
var stageCSS = getComputedStyle(stage);
var box = document.querySelector(".box");
var boxCSS = getComputedStyle(box);
var fps = 60;						// 초당 60장의 frame으로 Animation 구현
var sec = 2;						// Animation 진행 초
var ms = 1000/fps;			// 16.67 - setInterval 간격
var tar = 0;						// 움직일 Animation 총 거리
var step = 0;						// 한번에 움직일 거리
var pos = 0;						// 이동후 현재 위치
var interval = null; 		// setInterval() 객체

// jQuery resize 이벤트
$(window).resize(function(){
	console.log("hi~");
}).trigger("resize");

// JS resize 이벤트
window.addEventListener("resize", function(){
	tar = gen(stageCSS.width) - gen(boxCSS.width);
	step = tar/(fps*sec);	// frame 한번당 움직일 거리(px)
	console.log(tar, step);
});
window.dispatchEvent(new Event("resize"));

function ani() {
	pos = pos + step;
	box.style.left = pos + "px";
	if(pos > tar) {
		clearInterval(interval);
		box.style.left = tar+"px";
	}
}
document.querySelector("#bt_move").addEventListener("click", function(){
	clearInterval(interval);
	interval = setInterval(ani, ms);
});
document.querySelector("#bt_reset").addEventListener("click", function(){
	clearInterval(interval);
	pos = 0;
	box.style.left = "0";
});
*/

function gen(str) {
	return Number(str.replace("px", ""));
}
var stage = document.querySelector(".stage");
var stageCSS = getComputedStyle(stage);
var box = document.querySelector(".box");
var boxCSS = getComputedStyle(box);
var tar = 0;
window.addEventListener("resize", function(){
	tar = gen(stageCSS.width) - gen(boxCSS.width);
});
window.dispatchEvent(new Event("resize"));

document.querySelector("#bt_move").addEventListener("click", function(){
	anime({
		targets: '.box',
		left: tar,
		duration: 1000,
		easing: 'spring(1, 98, 15, 0)',
		complete: function(anim) {
			console.log("완료!");
		}
	});
});
document.querySelector("#bt_reset").addEventListener("click", function(){
	box.style.left = "0";
});
