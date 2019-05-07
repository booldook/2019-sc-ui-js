/***** Sugar.Array(sArray) *****/
//random
var rnd = Math.floor(Math.random() * 89) + 10; // 0 ~ 1보다 작은 실수
var rnd2 = Sugar.Number.random(10, 99);
console.log(rnd, rnd2);

// Date
var date = Sugar.Date.create('next Friday');
console.log(date);
date2 = Sugar.Date.format(date, '%Y-%m-%d %H:%M:%S');
date3 = Sugar.Date.format(new Date(), '%Y-%m-%d %H:%M:%S');
console.log(date2);
console.log(date3);

// Unique
var id = Sugar.Array.unique([1, 2, 2, 3, 3, 4, 5]);
console.log(id);

var arr = new Sugar.Array([1,2]);
var arr2 = arr.concat([2,3]).unique().raw;
console.log(arr2);

var arr = sArray.construct(4, function(i) {
  return i * i;
});
console.log(arr);

var arr = sArray.create("abc");
console.log(arr);

var arr = [1, 2, 3, 4, 5];
var avg = sArray.average(arr);
console.log(avg);

var employees = [
	{name: "홍길동", age: 29, pay: 3000, gender:"남자"},
	{name: "홍길순", age: 33, pay: 4800, gender:"여자"},
	{name: "홍길만", age: 29, pay: 4500, gender:"남자"},
	{name: "홍길이", age: 40, pay: 5500, gender:"여자"},
	{name: "홍길만", age: 29, pay: 2800, gender:"남자"},
	{name: "홍길오", age: 35, pay: 5800, gender:"남자"}
];

//average
var avg = sArray.average(employees, 'age');
console.log(avg);
var avg2 = sArray.average(employees, 'pay');
console.log(avg2);

//find
var employee = sArray.find(employees, function(user) {
  return user.name === '홍길만';
});
console.log(employee);

// map
var users = sArray.mapFromIndex(employees, 2, 'name');
console.log(users);

// sortBy
var sortUsers = sArray.sortBy(employees, 'age', true);
console.log(sortUsers);

// min, max, sum
// subtract, union

/***** Sugar.Date(sDate) *****/
var date = sDate.create();
console.log(date);