
console.log(10 / 2);
console.log(5 / 2);
console.log(10 % 4);
console.log(4 % 10);

var number = 3;
console.log(number ** 3);       // ES7문법: 거듭제곱 연산자

console.log(Math.pow(number, 3)); //ES7 이전 문법: 거듭제곱 연산
Math.pow(Math.pow(number, 3), 2);

//단항 산술 연산자 ++, --
console.log("==============================================");

var x = 3;
x++;
x++;
x--;
console.log(`x: ${x}`);

// 전위(prefix)연산, 후위(postfix) 연산
console.log("==============================================");

var a = 10;
var result;

// 후위 연산은 선할당 후연산
result = a++;
console.log(`result: ${result}, a:${a}`);   // result:10, a=11

// 전위 연산은 후할당 선연산
result = ++a;
console.log(`result: ${result}, a:${a}`);   // result:12, a=12


result = a--;
console.log(`result: ${result}, a:${a}`);   // result:12, a=11

result = --a;
console.log(`result: ${result}, a:${a}`);   // result:10, a=10


