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

	}
	Hover.prototype.hoverSlide = function() {

	}
	return Hover;
}());