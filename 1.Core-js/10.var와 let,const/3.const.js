/*
변수: 변경 가능한 데이터
상수: 변경 불가능한 데이터
let pi = 3.14 로 사용하는 것 보다 const pi = 3.14로 사용
const는 let과 특징이 비슷하다
*/

//let pi = 3.14159;
const pi = 3.14159;
//pi = 6.66;
console.log(`원주율: ${pi}`);

//let은 선언 후 차후에 언제든지 값을 초기화 해서 사용하면 된다.
//그러나 const는 선언과 동시에 초기화 해야 한다.(즉시 값을 넣어줘야 한다.)
let x;
x = 10
console.log(x);
//const y;   //선언과 동시에 초기화해야함 (예: const y = 100;)

console.log('=======================');


const TAX_RATE = 0.1;

let preTaxPrice = 100;  //세전 가격

// let afterTaxPrice = PreTaxPrice + (PreTaxPrice * 0.1); //세후 가격
//(TAX_RATE를 사용하면 0.1로 코드 짠거 보다 가독성 증가)
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE); //세후 가격

//상수 데이터 작성규칙(스네이크 케이스 이용: 변수를 모두 대문자로 사용)
//모두 대문자로 작성된 변수는 상수라고 판단하면 됨(C, Java등 대부분 공통)

//const와 객체(배열, 객체 등)
//객체와 같이 사용되는 const => 객체의 프로퍼티 변경이 가능하다.
const person = {
    name: 'lee',
    gender: 'M'
}

person.name = 'kim';
console.log(person);

person.age = 30;
console.log(person);

person.isStudent = true;
console.log(person);

delete person.isStudent;
console.log(person);

//const는 객체(배열)를 다른 객체(배열)로 바꾸는 것은 안됨
//즉, 객체의 프로퍼티, 배열 요소의 변경만 가능하다.
//읽기 전용으로 사용하는 기본타입에는 const 사용을 권장
//ES6 부터는 var 키워드 사용하지 마세요!

const arr = [1,2,3];
arr[1] = 200;
console.log(arr);

// arr = [100,200,300];  //const로 선언한 배열은 배열의 요소변경은 가능하나 배열 자체를 바꾸는 것은 안된다.