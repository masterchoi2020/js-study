
//1.변수 중복선언 불가
let x = 3;
// let x = 5;  //SyntaxError!
x = 5;

//2.블록레벨 스코프를 지원
//변수의 생애 주기가 짧아지게 됨
let y = 10;
if(true) {
    let y = 20;
    console.log(`if의 y: ${y}`);
}
console.log(`전역레벨의 y: ${y}`);

// for (var i=1; i <= 10; i++){}
// console.log(i);
/*
for (let i=1; i <=10; i++){}
console.log(i);
*/

//3.변수 호이스팅이 일어나지 않음
/*
z = 10;
console.log(z);
let z;
*/