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

// 문자열 만들기
var html = '<button onclick="alert(\'hi\');"></button>';		// OK
var html2 = "<button onclick=\"alert('hi');\"></button>";		// OK

// 문자열 안에서 줄바꿈
//alert("아버지를 아버지라 부르지 못하고\n형을 형이라 부르지 못하고..."); 

// 문자열과 변수가 혼합된 긴 문자열 처리
var score = [];
score[0] = {name: "홍길동", kor: 95, eng: 90, math: 85};
score[1] = {name: "홍길순", kor: 90, eng: 95, math: 88};
score[2] = {name: "홍길이", kor: 95, eng: 90, math: 85};
score[3] = {name: "홍길만", kor: 85, eng: 85, math: 95};

function makeTable() {
	$("#console").empty();
	// table 생성
	var $table = $('<table></table>').appendTo($("#console"));
	$table.addClass("table table-bordered table-hover text-center");
	
	// thead 생성
	var $thead = $('<thead></thead>').appendTo($table);
	$thead.append('<tr></tr>');
	$thead.children('tr').append('<td>이름</td>'); 
	$thead.children('tr').append('<td>국어</td>'); 
	$thead.children('tr').append('<td>영어</td>'); 
	$thead.children('tr').append('<td>수학</td>'); 
	$thead.css("background-color", "#ccc");

	// tbody 생성
	var $tbody = $('<tbody></tbody>').appendTo($table);
	for(var i=0 in score) {
		$tbody.append('<tr><td>'+score[i].name+'</td><td>'+score[i].kor+'</td><td>'+score[i].eng+'</td><td>'+score[i].math+'</td></tr>');
	}
}

function makeTable2() {
	var html = '';
	html += '<table class="table table-bordered table-hover text-center">';
	html += '<thead style="background-color: #ccc;">';
	html += '<tr>';
	html += '<td>이름</td>';
	html += '<td>국어</td>';
	html += '<td>영어</td>';
	html += '<td>수학</td>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	for(var i=0 in score) {
		html += '<tr>';
		html += '<td>'+score[i].name+'</td>';
		html += '<td>'+score[i].kor+'점</td>';
		html += '<td>'+score[i].eng+'점</td>';
		html += '<td>'+score[i].math+'점</td>';
		html += '</tr>';
	}
	html += '</tbody>';
	html += '</table>';
	$("#console").html(html);
}

function makeTable3() {
	var html = '';
	html += '<table class="table table-bordered table-hover text-center">';
	html += '<thead style="background-color: #ccc;">';
	html += '<tr>';
	html += '<td>이름</td>';
	html += '<td>국어</td>';
	html += '<td>영어</td>';
	html += '<td>수학</td>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	for(var i in score) {
		html += '<tr>';
		for(var prop in score[i]) html += '<td>'+score[i][prop]+'</td>';
		html += '</tr>';
	}
	html += '</tbody>';
	html += '</table>';
	$("#console").html(html);
}

function makeTable4() {
	var html = `
	<table class="table table-bordered table-hover text-center">
		<thead>
			<tr>
				<td>이름</td>
				<td>국어</td>
				<td>영어</td>
				<td>수학</td>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>`;
	$table = $(html).appendTo($("#console"));
	var tr = ``;
	for(var i=0 in score) {
		tr += `
		<tr>
			<td>${score[i].name}</td>
			<td>${score[i].kor}점</td>
			<td>${score[i].eng}점</td>
			<td>${score[i].math}점</td>
		</tr>`;
	}
	$table.append(tr);
}

//$("#bt_table").click(makeTable);		// 구조를 만들어 가기
//$("#bt_table").click(makeTable2);		// ES5 문자열 생성
$("#bt_table").click(makeTable3);			// ES5 문자열 생성 - 객체의 loop
//$("#bt_table").click(makeTable4);		// ES6 문자열 생성 (Template literal) - 배워만두자


/*
<table class="table table-bordered table-hover text-center">
	<thead>
		<tr>
			<td>이름</td>
			<td>국어</td>
			<td>영어</td>
			<td>수학</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>홍길동</td>
			<td>75점</td>
			<td>85점</td>
			<td>95점</td>
		</tr>
	</tbody>
</table>
*/


// 문자열 검색
var ext = "jpg|jpeg|png|tif|tiff|bmp";
$("#bt_sch").click(function(){
	var str = $(".jumbotron > h2").text();
	var search = $("#in1").val();
	//var idx = str.indexOf(search);
	var idx = ext.indexOf(search);
	if(idx > -1 && search != "") $("#console").html('<h1>사용할 수 있습니다.</h1>');
	else $("#console").html('<h1 style="color:red">사용할 수 없습니다.</h1>');
});