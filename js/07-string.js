var tiTxt = document.querySelector("#in1");
var btLen = document.querySelector("#bt1");
var btReset = document.querySelector("#bt_reset");
var dvConsole = document.querySelector("#console");
btLen.addEventListener("click", function(){
	var txt = cutStr(tiTxt.value, 12, "..");
	dvConsole.innerHTML = txt;
});
btReset.addEventListener("click", function(){
	dvConsole.innerHTML = '';
});

