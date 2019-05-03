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