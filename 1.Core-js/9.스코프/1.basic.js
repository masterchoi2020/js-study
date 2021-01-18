//스코프(생애주기)는 모든 언어에 공통되므로 꼭 잘아두세요.

var x = 10;

function foo(){
    var y = 20;
    console.log(x);
    console.log(y);
}

// foo();

// console.log(x);
// console.log(y);  //함수레벨 스코프 참조 불가

//js에서 스코프는 전역레벨 스코프와 함수레벨 스코프로 나뉜다.
//함수레벨 스코프: 함수내부에서 만들어진 변수는 함수가 종료되면 메모리에서 같이 사라진다.
//전역레벨 스코프: 프로그램이 끝날때 까지 계속 살아있고, 프로그램이 종료 되어야 비로소 사라진다.
console.log("=======================");

var v1 = 'global';

function bar(){
    var v1 = 'local';
    console.log(`v1: ${v1}`);
}

console.log(`v1: ${v1}`);
bar();
console.log(`v1: ${v1}`);
