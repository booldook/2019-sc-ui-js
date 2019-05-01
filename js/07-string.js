var tiTxt = document.querySelector("#in1");
var btLen = document.querySelector("#bt1");
var btReset = document.querySelector("#bt_reset");
var dvConsole = document.querySelector("#console");
function strCut(txt, len) {

}
btLen.addEventListener("click", function(){
	var txt = tiTxt.value;
	var len = txt.length;
	var viewTxt = '';
	if(len > 10) viewTxt = txt.substr(0, 10) + '...';
	else viewTxt = txt;
	dvConsole.innerHTML = viewTxt;
});
btReset.addEventListener("click", function(){
	dvConsole.innerHTML = '';
});

