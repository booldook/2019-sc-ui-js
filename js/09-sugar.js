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
console.clear();
var date = sDate.create();
console.log(date);
var date = new Date().getTime();	// Js
console.log(date);	
var date2 = Date.now();					// Sugar
console.log(date2);

// range
var date3 = sDate.range('now', '5 days ago');
console.log(date3);

// addUnits
// addMilliseconds / addSeconds / addMinutes / addHours / addDays / addWeeks / addMonths / addYears
var deliDay = sDate.addDays(new Date(), 5);

// format
deliDayFmt = sDate.format(deliDay, "%Y-%m-%d %H:%M:%S");
deliDayFmt2 = sDate.format(deliDay, "%y-%m-%d %H:%M:%S");
deliDayFmt3 = sDate.format(deliDay, "%y-%m-%d");
console.log(deliDay);
console.log(deliDayFmt);
console.log(deliDayFmt2);
console.log(deliDayFmt3);

// local표현
var date = sDate.full(new Date(), 'ko');
console.log(date);

// 차이
var chk = sDate.isBetween(new Date(Date.now()), new Date(Date.now()+50000), 1000);
console.log(chk);


/***** String *****/
var camel = sString.camelize('my_house_color', false);
console.log(camel);

var str = '     too      much       space      ';
var space = sString.compact(str);
console.log(str);
console.log(space);

var html = sString.escapeHTML('<p>some text</p>');
console.log(html);
var tag = sString.unescapeHTML('&lt;p&gt;some text&lt;/p&gt;');
console.log(tag);
var url = sString.escapeURL('http://foo.com/', true);
console.log(url);
var html = sString.removeTags('<p>just <b>some</b> text</p>', 'b');
console.log(html);
var html = sString.stripTags('<p>just <b>some</b> text</p>', 'b');
console.log(html);
var cutString = sString.truncate('sittin on the dock', 10);
console.log(cutString);

