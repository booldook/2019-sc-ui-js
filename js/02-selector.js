// ES5
var x = 10;
x += 5;
//console.log(x);	//15

var t = '<div class="mt">';
t += '<p>'+x+'</p>';
t += '</div>';
//console.log(t);	//<div class="mt">15</div>

// Java
// int a = "10"; //Error
// int a = 20; //Error
// String b = "10" //OK
// ArrayList<String> arr = new ArrayList()<>;

// ES6
const kind = "Human";
var name = "김영웅";
var age = 24;
var height = 170;

const arr = new Array();
arr.push("A");
arr.push("B");
arr.push("C");

const Man = {
	name: "홍길동",
	age : 25
};
Man.name = "홍길순";


for(var i=0; i<10; i++) {
	//console.log(i);
}
//console.log("마지막 값: " + i);

let j = 0;
for(let j=0; j<10; j++) {
	//console.log(j);
}
//console.log("마지막 값: " + j);

var x = 10 ** 10;
console.log(x);

// %의 사용법

var prdArr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,7,8];
var html = '';
html = '<tr>';
for(var i=0; i<prdArr.length; i++) {
	html += '<td>'+i+'</td>';
	if(i % 3 == 2) {
		html += '</tr>';
		html += '<tr>';
	}
}
html += '</tr>';
document.querySelector("#prds>tbody").innerHTML = html;
