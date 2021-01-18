// + 연산자는 숫자와 문자열이 만나면 우선적으로 문자열을 숫자 타입로 변환시키려 한다.

var ex = 10 + '20';
console.log(typeof ex);

ex = 10 + '';
console.log(typeof ex);

//만약 HTML 의 input태그로 부터 값이 숫자타입로 넘어온 것을 문자열타입으로 변환 할 경우
// var numParam = 10;
// var strParam = numParam + ''; 

var logical = true + '';

console.log("=====================");
// + 가 아닌 연산자(-, +, % 등)는 암묵적으로 숫자로 변환
var x = 10 - '3';
console.log(x);

// 부호(+, -)를 붙이면 문자열을 암묵적으로 숫자타입으로 변환시킨다.
/*
문자열 타입을 암묵적 숫자 타입으로 변환
+''  // -> 0
+'0' // -> 0
+'1' // -> 1
+'hello' // -> NaN

//논리 타입을 암묵적 숫자 타입으로 변환
+true  // -> 1
+false // -> 0

//null
+null  // -> 0

*/