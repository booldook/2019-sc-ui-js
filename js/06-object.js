$("#bt_chg").click(function(){
	$(".box").css("background-color", $("#color").val());
});

$(".hover_chg").mouseenter(function(){
	$(this).attr("src", $(this).data("hover"));
});
$(".hover_chg").mouseleave(function(){
	$(this).attr("src", $(this).data("src"));
});

/*
var imgHover = {
	obj: null,
	init: function(src, hover){
		$(this.obj).mouseenter(function(){
			$(this).attr("src", hover);
		});
		$(this.obj).mouseleave(function(){
			$(this).attr("src", src);
		});
	}
}

imgHover.obj = $(".bt_img");
imgHover.init('../img/p1.jpg', '../img/p2.jpg');
imgHover.init('../img/p3.jpg', '../img/p4.jpg');
imgHover.init('../img/p5.jpg', '../img/p6.jpg');
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



var Hover = (function(){
	function Hover(obj, src, hover) {
		this.obj = obj;
		this.src = src;
		this.hover = hover;
		this.init();
	}
	Hover.prototype.init = function(){
		var my = this;
		this.obj.mouseenter(function(){
			$(this).attr("src", my.hover);
		});
		this.obj.mouseleave(function(){
			$(this).attr("src", my.src);
		});
	}
	return Hover;
}());


var img1 = new Hover($(".bt_img").eq(0), "../img/p1.jpg", "../img/p2.jpg");
console.log(img1);

new Hover($(".bt_img").eq(1), "../img/p3.jpg", "../img/p4.jpg");
new Hover($(".bt_img").eq(2), "../img/p5.jpg", "../img/p6.jpg");
new Hover($(".bt_img").eq(3), "../img/p7.jpg", "../img/p8.jpg");

