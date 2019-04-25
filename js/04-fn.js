function hap() {
	$(".conts").append("합!");
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


$(".conts").animate({"font-size":"5rem"}, function(){
	$(this).css({"background-color":"red"});
});


var hap4 = function(x, y) {
	
}
hap4(5, 10);