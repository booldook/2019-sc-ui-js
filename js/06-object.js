$("#bt_chg").click(function(){
	$(".box").css("background-color", $("#color").val());
});

$(".HoverSample_chg").mouseenter(function(){
	$(this).attr("src", $(this).data("HoverSample"));
});
$(".HoverSample_chg").mouseleave(function(){
	$(this).attr("src", $(this).data("src"));
});

/*
var imgHoverSample = {
	obj: null,
	init: function(src, HoverSample){
		$(this.obj).mouseenter(function(){
			$(this).attr("src", HoverSample);
		});
		$(this.obj).mouseleave(function(){
			$(this).attr("src", src);
		});
	}
}

imgHoverSample.obj = $(".bt_img");
imgHoverSample.init('../img/p1.jpg', '../img/p2.jpg');
imgHoverSample.init('../img/p3.jpg', '../img/p4.jpg');
imgHoverSample.init('../img/p5.jpg', '../img/p6.jpg');
*/
var Test = (function(){
	function Test(obj) {
		this.obj = obj;
	} 
	return Test;
}());
var a = new Test($(".bt_img").eq(0));
var b = new Test($(".bt_img").eq(1));
var c = new Test($(".bt_img").eq(2));

var Sample = (function(){
	function Sample(name) {
		this.name = name;
	}
	return Sample;
}());
Sample.prototype.eat = function(){
	alert(this.name + "이(가) 먹는다");
}

var sample = new Sample("홍길동");
var sample2 = new Sample("홍길순");
//console.log(sample.name);
//console.log(sample2.name);
//sample2.eat();

var HoverSample = (function(){
	function HoverSample(obj, src, HoverSample) {
		this.obj = obj;
		this.src = src;
		this.HoverSample = HoverSample;
		this.init();
	}
	return HoverSample;
}());
HoverSample.prototype.init = function(){
	var my = this;
	this.obj.mouseenter(function(){
		$(this).attr("src", my.HoverSample);
	});
	this.obj.mouseleave(function(){
		$(this).attr("src", my.src);
	});
}
/*
var img1 = new HoverSample($(".bt_img").eq(0), "../img/p1.jpg", "../img/p2.jpg");
console.log(img1);
new HoverSample($(".bt_img").eq(1), "../img/p3.jpg", "../img/p4.jpg");
new HoverSample($(".bt_img").eq(2), "../img/p5.jpg", "../img/p6.jpg");
new HoverSample($(".bt_img").eq(3), "../img/p7.jpg", "../img/p8.jpg");
*/


new Hover($(".bt_img").eq(0), {
	src: "../img/p1.jpg",
	hover: "../img/p2.jpg"
});

new Hover($(".bt_img").eq(1), {
	src: "../img/p3.jpg",
	hover: "../img/p4.jpg",
	type: "fade",
	speed: 1000
});


