function hap() {
	//$(".conts").append("합!");
}
hap();

function hap2(x) {
	return x + 10;
}
var n = hap2(10);
console.log(n);

function hap3(x, y) {
	console.log(x);
	console.log(y);
}
hap3(5);

function animate2(_a, _b, _c, _d) {
	var a = _a;
	var b;
	var c;
	var d;
	if(typeof b == 'number') b = _b;
	else if(typeof b == 'String') {
		b = 1000;
		c = _b;
	}
	else if(typeof b == 'function') {
		b = 1000;
		c = "swing";
		d = _b;
	}
}

/*
$(".conts").animate({"font-size":"5rem"}, function(){
	$(this).css({"background-color":"red"});
});
*/


var hap4 = function(x, y) {
	
}
hap4(5, 10);

$(".conts").click(function(){

});

// 콜백 구현
function callback(x, fn) {
	var y = x + " 콜백";
	fn(y);
}
callback(10, function(data){
	console.log(data);
});

// 콜백 예제
function makeTag(html, parent, fn) {
	var obj = $(html).appendTo(parent);
	fn(obj);
}
makeTag('<div id="new_tag">어렵다!</div>', '.console', function(obj){
	obj.css({"color": "red", "font-size":"2rem"});
});

//클로저
function addMaker(a){
	return function(b) {
		return a + b;
	}
}
var add10 = addMaker(10);
var result = add10(90);

var add20 = addMaker(20);
var result2 = add20(50);

var result3 = addMaker(30)(50);

console.log(result);
console.log(result2);
console.log(result3);