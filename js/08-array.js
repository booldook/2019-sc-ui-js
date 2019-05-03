// Java, c
// var arr:String = ['A', 'B', 12]; //error
// Javascript - 하나의 배열에 다양한 type을 넣을 수 있다.
var arr = [];
var arr = ["K", 123, function(){}, {}, true, Infinity];
arr[6] = "B";
arr.push("C");
arr.push("D");
arr[20] = 'F';
console.log(arr);
arr.sort();
console.log(arr);
//console.log(arr.length);

for(var i=0; i<arr.length; i++) {
	//console.log(i, arr[i]);
}
for(var i in arr) {
	//console.log(i, arr[i]);
}
arr.forEach(function(v, i){
	//console.log(v, i);
});
// 아직은 시기상조 ES6-ie지원안됨
for(var v of arr) {
	//console.log(v);
}

var obj = {name: "홍길동"};
obj.age = 25;
obj.run = function(){};
// 객체는 for..in 만 지원된다.
for(var i in obj) {
	console.log(i, obj[i]);
}
console.log(obj);

// Array Methods
// push() - 배열의 맨 뒤에 요소 삽입하기
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("배열: " + fruits);
fruits.push("kiwi");
console.log("배열: " + fruits);
// pop() - 배열의 맨 뒤의 요소 삭제하기(삭제된 데이터 리턴값으로 추출)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("배열: " + fruits);
console.log(fruits[3]);
console.log("배열: " + fruits);
var fruit = fruits.pop();
console.log("fruits.pop() 결과: " + fruit);
console.log("pop()한 후 fruits:" + fruits);
// shift() - 배열의 맨 앞의 요소 삭제하기(삭제된 데이터 리턴값으로 추출)
var fruit2 = fruits.shift();
console.log("fruits.shift() 결과: " + fruit2);
console.log("shift()한 후 fruits:" + fruits);
//unshite()	- 배열의 맨 앞에 추가하기
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);
//splice()	- 배열의 중간 요소를 삭제하기/추가하기
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit = fruits.splice(2, 2);
console.log(fruits);
console.log(fruit);
//concat() - 배열 두개 합치기
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

console.clear();

//slice()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);
var citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);

// 배열의 복사(copy) 예제
var heros = ["아이언맨", "헐크", "캡틴", "토르", "호크아이"];
var heros2 = heros;
console.log("heros:" + heros);
console.log("heros2:" + heros2);
heros.splice(2, 1);
console.log("heros:" + heros);
console.log("heros2:" + heros2);

heros = ["아이언맨", "헐크", "캡틴", "토르", "호크아이"];
heros2 = heros.slice(0);
console.log("heros:" + heros);
console.log("heros2:" + heros2);
heros.splice(2, 1);
console.log("heros:" + heros);
console.log("heros2:" + heros2);

// map() - 배열의 모든 요소에게 함수를 적용하고 결과값을 새로운 배열에 넣어준다.
var heros = ["아이언맨", "헐크", "캡틴", "토르", "호크아이"];
var newHeros = heros.map(function(v){
	return v += " 업그레이드";
});
console.log(heros);
console.log(newHeros);

var numbers = [1, 2, 3, 4];
var newNumbers = numbers.map(function(v){
	return v * 2;
});
console.log(numbers);
console.log(newNumbers);

// filter() - 배열의 모든 요소에게 함수를 실행해서 필터링 해준 결과를 새로운 배열에 넣어준다.
var heros = ["아이언맨", "헐크", "캡틴", "토르", "호크아이"];
var newHeros = heros.filter(function(v){
	if(v.length < 3) return v;
});
console.log(heros);
console.log(newHeros);

var employees = [
	{name: "홍길동", age: 29, pay: 3000},
	{name: "홍길순", age: 33, pay: 4800},
	{name: "홍길만", age: 29, pay: 4500},
	{name: "홍길이", age: 40, pay: 5500},
	{name: "홍길삼", age: 29, pay: 2800},
	{name: "홍길오", age: 35, pay: 5800}
];

var dvConsole = document.querySelector(".console");
var btPay = document.querySelector("#bt_pay");
var btAge = document.querySelector("#bt_age");
btPay.addEventListener("click", payFilter);
function payFilter() {
}
btAge.addEventListener("click", ageFilter);
function ageFilter() {
	
}

