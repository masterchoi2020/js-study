//함수 리터럴, 함수 표현식(함수를 변수에 담았을 경우 ->익명함수가 됨)
//함수 리터럴 : var 변수명 = function(){};
var add = function (num1, num2) {
    return num1 + num2;
};
//함수 리터럴을 이용해 함수를 정의하게 되면 함수의 이름은 add가 된다.(익명함수)
//익명함수는 다른 함수의 매개변수로 사용 가능하다(콜백 함수)
console.log(typeof add);
console.log(add(4,7));
console.log('==========================');


//즉시 실행함수: ( function(){} () );
/*
(function(x, y){
    console.log(`x + y = ${x + y}`);
}(10, 20));
*/

//즉시 실행함수는 주로 일회성 함수로 사용된다.
var result = (function (x, y){
    console.log(`x - y = ${x - y}`);
    return x - y;
    
}(30, 10));
console.log(result);

//즉시 실행함수는 호출하지 않아도 바로 실행된다.
(function(name){
    console.log(`${name}님 안녕하세요.`);
}('고길동'));

console.log('==========================');


//재귀 함수 (하는일이 반복문처럼 행동 => 반복문으로 구현가능)
// n ~ 0까지 숫자가 감소하면서 출력하는 함수
function countdown(n){
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}
countdown(5)

console.log('==========================');

function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));


//중첩 함수(javascript만 가능)
//다른 언어들은 함수내부에 함수선언을 할 수 없는데, js는 함수내부에 함수선언이 가능

//inner()함수는 outer()의 전용함수로 outer안에 또 다른 함수로 사용된다.(help 함수)
//단, outer()함수 내부에서 inner()함수를 호출하는 문장이 있어야 한다.

function outer(){
    var x = 1;

    function inner(){
        var y = 2;
        console.log(`outer(x) + inner(y) = ${x} + ${y} = ${x + y}`);
    }
    // console.log(x + y);
    inner();
}

outer();
// inner();








