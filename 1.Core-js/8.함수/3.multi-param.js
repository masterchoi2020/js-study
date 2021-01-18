/*
//2개의 정수 합을 구하는 함수
function add2(num1, num2){
    return num1 + num2;
}

var resultSum2 = add2(10,20);
console.log(`2개의 정수합: ${resultSum2}`);

//3개의 정수 합을 구하는 함수
function add3(num1, num2, num3){
    return num1 + num2 + num3;
}

var resultSum3 = add3(10,20,30);
console.log(`3개의 정수합: ${resultSum3}`);
*/

//n개의 정수 합을 구하는 함수(배열을 이용)
function addAll(numbers = []){
    var total = 0;
    for (var num of numbers){
        total += num;
    }
    return total;
}

//함수호출
var result = addAll([10, 20, 30, 40, 50]);
console.log(result);


//n개의 정수 합을 구하는 함수(ES6문법)
//호출시 배열로 묶지 않아도 됨
//방법: 매개변수앞에  ...매개변수   형식으로 사용
function addAll2(...numbers){
    var total = 0;
    for(var num of numbers){
        total += num;
    }
    return total;
}

//배열로 묶지 않고 매개변수(인자값) 입력가능
var result2 = addAll2(10, 20, 30, 40, 50);
console.log(result2);