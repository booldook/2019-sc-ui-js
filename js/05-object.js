// 계산기
function add(x, y) {
	return x + y;
}
function sub(x, y) {
	return x - y;
}
function multi(x, y) {
	return x * y;
}
function div(x, y) {
	return x / y;
}
function mod(x, y) {
	return x % y;
}
/*
$("#bt_solve").click(function(){
	$("#res").val(eval($("#a").val() + $("#oper").val() + $("#b").val()));
});
*/
$("#bt_solve").click(function(){
	var a = $("#a").val();
	var b = $("#b").val();
	var oper = $("#oper").val();
	var result = eval(a + oper + b);	// "10" + "*" + "20" => "10*20"	=> eval("10*20")	=> 200
	$("#res").val(result);
});
/*
document.getElementById("bt_solve").addEventListener("click", function(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var oper = document.getElementById("oper").value;
	var result = eval(a + oper + b);
	document.getElementById("res").value = result;
});
*/

//var res = eval("10" + "+" + "20");
//console.log(res);

