var ScGallery = (function(){
	function ScGallery(container, url) {
		this.cssInit();
		this.getJson(container, url);
	}
	ScGallery.prototype.getJson = function(container, url) {
		$.ajax({
			type: "get",
			url: url,
			dataType: "json",
			success: function (res) {
				var html = '';
				html += '<div class="gal_wraps">';
				html += '<div class="gal_pics">';
				html += '<img src="'+res.imgs[0].img+'" class="img">';
				html += '</div>';
				html += '<ul class="gal_lists">';
				for(var i=0 in res.imgs) {
					html += '<li><img src="'+res.imgs[i].img+'" class="img"></li>';
				}
				html += '</ul>';
				html += '</div>';
				$(container).html(html);
				$(".gal_lists img").on("click", function(){
					var src = $(this).attr("src");
					$(".gal_pics > img").attr("src", src);
				});
			}
		});
	};
	ScGallery.prototype.cssInit = function() {
		var css = '';
		css += '<style>\n';
		css += '.img {width: 100%;}\n';
		css += '.gal_wraps {width: 100%;}\n';
		css += '.gal_pics {width: 100%;}\n';
		css += '.gal_lists {width: 100%; display: flex; justify-content: center; align-items: flex-start;}\n';
		css += '.gal_lists > li {flex: 0 1 10%;}\n';
		css += '</style>\n';
		$("head").append(css);
	};
	return ScGallery;
}());

