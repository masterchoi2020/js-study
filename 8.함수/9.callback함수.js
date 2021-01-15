//Callback(콜백) 함수: 함수한테 함수를 매개변수로 던져 주는 것
//함수형 프로그램에서 핵심적인 역할

/*
// 1 ~ n까지 정수 출력
function showNumbers(n){
    for(var i = 1; i <= n; i++){
        console.log(i);
    }
}
showNumbers(5);


// 1 ~ n까지 홀수 출력
function showOddNumbers(n){
    for(var i = 1; i <= n; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
showOddNumbers(10);


// 1 ~ n까지 짝수 출력 => 비슷한 함수를 계속 만들어야 함(비효율적임)
function showEvenNumbers(n){
    for(var i = 1; i <= n; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
showEvenNumbers(10);
*/



//콜백 함수: function 함수명(매개변수, 함수) {}
function showNumbers(n, Callback) {
    for (var i = 1; i <= n; i++){
        Callback(i);
    }
}

//콜백 함수 호출
function logOdd(i){
    if(i % 2 === 1){
        console.log(i);
    }
}
function logEven(i){
    if(i % 2 === 0){
        console.log(i);
    }
}

// showNumbers(10, logOdd);
// showNumbers(10, logEven);



//js에서는 콜백함수 리터럴을 이용한 함수를 많이 사용한다. 
//콜백함수 리터럴을 이용하면 함수를 계속 만들지 않아도 된다.(콜백함수 활용)

//1~20까지 3의 배수만 출력하고 싶다면???
//원할 때 마다 익명함수 리터럴을 만들어 전달하면 된다.
showNumbers(20, function(i){
    if(i % 3 === 0) console.log(i);
});

console.log('=========================');



//숫자배열을 전달하면 해당 배열을 조건부로 필터링하여 복사배열을 만들어주는 함수 만들기
function filter(array, callback){

    var filterArray = [];

    for(var i of array){
        if(callback(i)){            //callback(i)에서 논리값인 true, false가 나옴
            filterArray.push(i);
        }
    }
    return filterArray;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

/*
var result = filter(numbers, function(n){  //filter()함수를 호출하면서 인자값으로 numbers와 fucnction()전달
    return n % 2 === 0;             
});

console.log(result);
*/

//ES 6 문법: 화살표 함수 (람다식을 이용한 화살표 함수 사용)
var result = filter(numbers, n => n % 2 === 0);
console.log(result);
