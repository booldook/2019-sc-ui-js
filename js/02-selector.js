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
//console.log(x);

// %의 사용법
var div = 6
var prdArr = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
var html = '';
html = '<tr>';
for(var i=0; i<prdArr.length; i++) {
	html += '<td>'+i+'</td>';
	if(i % div == (div - 1)) {
		html += '</tr>';
		html += '<tr>';
	}
}
html += '</tr>';
document.querySelector("#prds>tbody").innerHTML = html;

i++; // i = i + 1; 후위연산자
++i; // i = i + 1; 전위연산자

var i = 0;
//console.log(i++);	// 0
var k = 0;
//console.log(++k);	// 1

var depth = 10;
$("#prds").css({"position":"relative","z-index": depth++});
//console.log($("#prds").css("z-index"));
//console.log(depth);

//console.log(5 === 5);		//true
//console.log(5 === '5');	//false
//console.log(5 == 5);		//true
//console.log(5 == '5');	//true

var age = 17;
var voteable = (age < 18) ? "Too young":"Old enough";
if(age < 18) voteable = "Too young";
else voteable = "Old enough";

//console.log(typeof "1234");

//객체
var Hong = {
	name: "홍길동",
	age: 30,
	gender: "M",
	food: "밥",
	run: function(){
		console.log(this.name +"이(가) 뜁니다.");
	},
	eat: function(food){
		console.log(this.name + "이(가) " + food + "을(를) 먹습니다.");
	}
}
var Hong2 = {
	name: "홍길동",
	age: 30,
	gender: "M",
	food: "밥",
	run: function(){
		console.log(this.name +"이(가) 뜁니다.");
	},
	eat: function(food){
		console.log(this.name + "이(가) " + food + "을(를) 먹습니다.");
	}
}
Hong.run();
Hong.eat();
Hong.food = "돈까스";
Hong.eat("제육볶음");
Hong2.name = "홍길순";
Hong2.eat("볶음밥");

var Hero = (function(){
	function Hero(kind, name, gender) {
		this.kind = kind;
		this.name = name;
		this.gender = gender;
	}
	Hero.prototype.eat = function(food){
		console.log(this.name + "이(가)" + food + "을(를) 먹습니다.");
	}
	return Hero;
}());

var booldook = new Hero("휴먼", "불뚝", "남자");
booldook.eat("제육볶음");
var jihun = new Hero("오크", "강지훈", "여자");
jihun.eat("회덮밥");

console.log(booldook instanceof Hero);