document.getElementById("bt_date").addEventListener("click", function(){
	document.getElementById("display").innerHTML = new Date();
});

document.getElementById("bt_reset").addEventListener("click", function(){
	document.getElementById("display").innerHTML = '';
});