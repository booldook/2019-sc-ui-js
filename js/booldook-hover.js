// Hover 객체
// 규칙 : new Hover(객체(tag), 옵션);		//생성자
// 옵션 : { }
// 옵션 src				=> src : 원본이미지url
// 옵션 hover			=> hover : 호버이미지url
// 옵션 type			=> type : "fade", "slide", default ""
// 옵션 duration	=> speed : ms 1000, 2000, default 500

var Hover = (function(){
	function Hover(container, opt) {
		this.container = container;
		this.opt = {
			type: "",
			speed: 500,
			src: opt.src,
			hover: opt.hover
		};
		if(opt.type !== undefined) this.opt.type = opt.type;
		if(opt.speed !== undefined) this.opt.speed = opt.speed;
		this.init();
	}
	Hover.prototype.init = function() {
		var obj = this;
		switch(this.opt.type) {
			case "slide" :
				// type = 'slide'
				this.hoverSlide();
				break;
			case "fade" :
				// type = 'fade'
				this.hoverFade();
				break;
			default :
				// type != 'slide' && type != 'fade'
				this.hoverDef();
				break;
		}
	}
	Hover.prototype.hoverDef = function() {
		var obj = this;
		this.container.mouseenter(function(){
			$(this).attr("src", obj.opt.hover);
		});
		this.container.mouseleave(function(){
			$(this).attr("src", obj.opt.src);
		});
	}
	Hover.prototype.hoverFade = function() {
		var obj = this;
		var $imgSrc = this.container;
		var $parent = $imgSrc.parent();
		if($parent.css("position") == "static") $parent.css("position", "relative");
		var $imgHover = $imgSrc.clone().appendTo($parent);
		$imgSrc.attr("src", this.opt.src);
		$imgHover.attr("src", this.opt.hover);
		$imgHover.css({"position": "absolute", "top": 0, "left": 0, "opacity": 0});
		$imgHover.mouseenter(function() {
			$(this).stop().animate({"opacity": 1}, obj.opt.speed);
		});
		$imgHover.mouseleave(function() {
			$(this).stop().animate({"opacity": 0}, obj.opt.speed);
		});
	}
	Hover.prototype.hoverSlide = function() {

	}
	return Hover;
}());

// tag에서 생성하는 경우
/*
class="sc-hover"
data-src  		<= 원본이미지
data-hover		<= 호버이미지
data-type			<= 효과타입
data-speed	<= 애니메이션 효과
*/
$(".sc-hover").each(function(){
	var src = $(this).data("src");
	var hover = $(this).data("hover");
	var type = $(this).data("type");
	var speed = $(this).data("speed");
	new Hover($(this), {
		src: src,
		hover: hover,
		type: type,
		speed: speed
	});
});