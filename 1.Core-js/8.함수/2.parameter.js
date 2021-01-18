// 매개변수(parameter): 인수를 저장하기 위해 함수정의부에 선언된 변수
// 인수(arguments): 함수호출부에서 함수정의부로 전달되는 데이터

//begin부터 end까지의 총합을 구하는 함수
//함수 정의
function calcRangeTotal(begin, end){
    console.log(`begin: ${begin}, end: ${end}`);
    var total = 0;
    for(var number=begin; number <= end; number++){
        total += number;
    }
    return total;
}
//함수 호출
var result = calcRangeTotal(4, 7);
console.log(`함수 실행결과: ${result}`);



//매개 변수(parameter)가 없는 함수
/*
function sayHello(){
    console.log('안녕하세요.');
}
sayHello();
sayHello();
sayHello();
*/

function selectRandomFood(){
    var randomNum = Math.random();
    if(randomNum >= 0.66){
        return '짜장면';
    }else if(randomNum >= 0.33){
        return '볶음밥';
    }else {
        return '돈카츠';
    }
}
console.log(`오늘 점심메뉴: ${selectRandomFood()}`);
console.log('========================================');


//language가 설정되지 않고 함수호출하면 기본값으로 '한국어'가 나오도록 설정
function sayHello(language='한국어'){
    //lagnguage = langguage || '한국어';  //ES5 문법
    
    if(language === '한국어'){
        console.log('안녕하세요.');
        
    }else if(language === '영어'){
        console.log('Hello');
        
    }else if(language === '중국어'){
        console.log('니하오');
    }
}
sayHello();
sayHello('영어');
sayHello('중국어');
console.log('========================================');


function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('인수를 숫자로 전달해 주세요.');
        return;
    }else{
        return num1 * num2;
    }
}

// var result = multiply('4', '2');
var result = multiply(4, 2);
console.log(result);