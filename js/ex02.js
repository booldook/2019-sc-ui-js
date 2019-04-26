var wid = 100;
var hei = 100;
var bg = "blue";
var borWid = 0;
var borColor = "";
var borStyle = "solid";
var trX = 0;
var trY = 0;
var deg = 0;
var $box = $(".box");
$("#bt_save").click(function(){
	if($("#wid").val() !== "") wid = $("#wid").val();
	if($("#hei").val() !== "") hei = $("#hei").val();
	if($("#bg").val() !== "") bg = $("#bg").val();
	if($("#bor_wid").val() !== "") borWid = $("#bor_wid").val();
	if($("#bor_color").val() !== "") borColor = $("#bor_color").val();
	if($("#bor_style").val() !== "") borStyle = $("#bor_style").val();
	if($("#tr_x").val() !== "") trX = $("#tr_x").val();
	if($("#tr_y").val() !== "") trY = $("#tr_y").val();
	if($("#deg").val() !== "") deg = $("#deg").val();
	$box.css({
		"width": wid+"px", 
		"height": hei+"px", 
		"background-color": bg,
		"border": borWid+"px " + borStyle + " " + borColor,
		"transform": "translate("+trX+"px, "+trY+"px) rotate("+deg+"deg)"
	});
});
$("#bt_reset").click(function(){
	$box.css({
		"width": "100px", 
		"height": "100px", 
		"background-color": "blue",
		"border": "none",
		"transform": "translate(0px, 0px) rotate(0deg)"
	});
});