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

function gen(str) {
	return Number(str.replace("px", ""));
}
var stage = document.querySelector(".stage");
var stageCSS = getComputedStyle(stage);
var box = document.querySelector(".box");
var boxCSS = getComputedStyle(box);
var tar = gen(stageCSS.width) - gen(boxCSS.width);
var gap = 8.58;
var pos = 0;
var interval = null;
function ani() {
	pos = pos + gap;
	if(	gen(box.style.left) >= tar ) {
		box.style.left = tar + "px";
		clearInterval(interval);
		//callback 실행위치
	}
	else box.style.left = pos + "px";
}
document.querySelector("#bt_move").addEventListener("click", function(){
	clearInterval(interval);
	interval = setInterval(ani, 16.67);
});
