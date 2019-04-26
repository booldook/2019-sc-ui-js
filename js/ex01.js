/*
$("#bt_save").click(function(){
	// $("#result").find("span").eq(0);
	// $("#result").children("li").children("span").eq(0)
	// $("#result > li > span").eq(0);
	// $("span", $("#result")).eq(0);
	// $("#result > li > :nth-child(0)");
	$("#result span").eq(0).html($("#uname").val());
	$("#result span").eq(1).html($("#uid").val());
	$("#result span").eq(2).html($("#email").val());
});
$("#bt_reset").click(function(){
	$("#result span").html('');
});
*/

// ES5
document.getElementById("bt_save").addEventListener("click", function(){
	var uname = document.forms.uname.value;
	var uid = document.forms.uid.value;
	var email = document.forms.email.value;
	var tag = document.getElementById("result").getElementsByTagName("span");
	tag[0].innerHTML = uname;
	tag[1].innerHTML = uid;
	tag[2].innerHTML = email;
});
document.getElementById("bt_reset").addEventListener("click", function(){
	var tag = document.getElementById("result").getElementsByTagName("span");	//Array
	for(var i=0 in tag) {
		tag[i].innerHTML = '';
	}
});

// ES6
var d = document;
var f = d.forms;
var ins = d.querySelectorAll("#forms input");
var span = d.querySelectorAll("#result span");
d.querySelector("#bt_save").addEventListener("click", function(){
	for(var i=0 in span) span[i].innerHTML = ins[i].value;
});
d.querySelector("#bt_reset").addEventListener("click", function(){
	for(var i=0 in span) span[i].innerHTML = "";
});
