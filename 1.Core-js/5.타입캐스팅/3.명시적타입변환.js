// 명시작 문자열 변환

var a = 10, b = 20;
// var result = String(a) + String(b);   //String() 생성자 함수 사용
// var result = a.toString() + b.toString();  //to.String() 메서드 사용
var result = a + '' + b;
console.log(`result: ${result}`);



//명시적 숫자 변환
console.log("===========================");

var m = '100', n = '3.14';
// var result = Number(m) + Number(n);      //Number() 생성자 함수 사용
// var result = parseInt(m) + parseFloat(n);    //parseInt(), parseFloat() 함수 사용
var result = (+m) + (+n);
console.log(`result: ${result}`);


//명시적 논리 변환
console.log("===========================");

var ex1 = !'hello';     // String을 boolean으로 변환해서 판단.
var ex2 = !!'hello';        // !부정 논리 연산자를 두 번 사용
var ex3 = Boolean(undefined);   //Boolean() 생성자 함수 사용

console.log(ex1);
console.log(ex2);
console.log(ex3);


