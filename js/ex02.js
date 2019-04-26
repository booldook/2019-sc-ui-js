/*
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
*/

var wid = 100;
var hei = 100;
var bg = "blue";
var borWid = 0;
var borColor = "";
var borStyle = "";
var trX = 0;
var trY = 0;
var deg = 0;
var d = document;
var f = document.forms;
var box = d.querySelector(".box");
d.querySelector("#bt_save").addEventListener("click", function(){
	if(f.wid.value != "") wid = f.wid.value;
	if(f.hei.value != "") hei = f.hei.value;
	if(f.bg.value != "") bg = f.bg.value;
	if(f.bor_wid.value != "") borWid = f.bor_wid.value;
	if(f.bor_color.value != "") borColor = f.bor_color.value;
	if(f.bor_style.value != "") borStyle = f.bor_style.value;
	if(f.tr_x.value != "") trX = f.tr_x.value;
	if(f.tr_y.value != "") trY = f.tr_y.value;
	if(f.deg.value != "") deg = f.deg.value;
	box.style.width = wid+"px";
	box.style.height = hei+"px";
	box.style.backgroundColor = bg;
	box.style.border = borWid + "px " + borStyle + " " + borColor;
	box.style.WebkitTransform = "translate("+trX+"px, "+trY+"px) rotate("+deg+"deg)";	//safari
	box.style.msTransform = "translate("+trX+"px, "+trY+"px) rotate("+deg+"deg)";			//ie9
	box.style.transform = "translate("+trX+"px, "+trY+"px) rotate("+deg+"deg)";				//ie10 ~ chrome
});
d.querySelector("#bt_reset").addEventListener("click", function(){
	box.style.width = "100px";
	box.style.height = "100px";
	box.style.backgroundColor = "blue";
	box.style.border = "none";
	box.style.WebkitTransform = "translate(0px, 0px) rotate(0deg)";
	box.style.msTransform = "translate(0px, 0px) rotate(0deg)";
	box.style.transform = "translate(0px, 0px) rotate(0deg)";
});