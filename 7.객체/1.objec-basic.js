/* 객체(Object)
- 배열 : [] 사용 - 순차적 연관성이 있는 데이터들을 묶어서 관리한다.
- 객체 : {} 사용 - 순차적 연관성이 없는 데이터들을 묶어서 관리한다.(데이터는 key로 관리됨)

- 객체는 항상 '속성(property)'과 '기능(method)'을 가지고 있다.
속성(property) : key와 value쌍으로(key:value) 구성된다.(key는 변수, value는 변수값으로 생각),(정적인 상태를 나타냄)
기능(method) : 함수로 동적인 동작이라고 생각(움직이는 행동들)

- 세상의 모든 것은 객체(Object) 이다.

(에러: is not defined -> 주로 변수를 정의하지 안고 사용하거나, 함수를 정의하지 않고 호출할 경우 발생)
*/


//객체(Object) 생성
var dog = {
    name : '뽀삐',
    kind : '시추',
    age : 3,
    favorite : ['산책','간식']
};

var cat = {
    name : '콩순이',
    kind : '코숏',
    age : 2,
    favorite : ['낮잠', '캔참치', '캣타워']
};

console.log(typeof dog);


// 객체 프로퍼티(property) 참조 
// 참조는 프로퍼티의 key로 참조한다.
// key는 value를 찾기 위한 열쇠(키) 이다.

console.log(dog.name);
console.log(cat.name);

console.log(dog.favorite);
console.log(cat.favorite[2]);
console.log('-----------------------------');

console.log(dog.age);
console.log(dog['age']);  //[] 대괄호로 프로퍼티 참조시 문자열로 key를 만들어 줘야 한다.


//객체 프로퍼티에 value(값) 추가
dog.favorite.push('꼬리흔들기');
console.log(dog.favorite);


//프로퍼티 값 수정
dog.age = 5;
console.log(dog);

cat.favorite[1] = '날생선';
console.log(cat.favorite);
console.log('=============================');


//프로퍼티 동적 추가(동적으로 key와 value 추가)
dog.owner = '김철수';
console.log(dog);


//프로퍼티 삭제 (delete 사용)
delete dog.owner;
console.log(dog);
console.log('=============================');


//객체의 속성(프로퍼티)의 key와 value를 뽑아내기 위해 사용하는 반복문
//for ~ in :(ES6에서 추가: 객체에서 사용하는 반복문)
//for ~ of : (배열에서 사용하는 반복문)

for(var key in cat){
    // console.log(key);  // 객체에서 key를 뽑아내기
    
    // key가 string이므로 key를 이용해 value를 뽑을 땐 cat.[key]형식의 참조문법 사용
    console.log(cat[key]);
}


// 빈 객체(Object) 생성
var obj = {};

obj.x = 10;
obj.y = 20;
console.log(obj);
console.log('=============================');



//객체의 속성(property) key의 존재 여부 확인(속성key  in  객체)
var flag = 'kind' in cat; //논리값(boolean)으로 알려 줌
console.log(`존재 여부: ${flag}`);
console.log('=============================');


var key = 'hobby';
if (key in cat){
    console.log('해당 키는 존재합니다.');
}else{
    console.log('해당 키는 없는 키입니다.');
}
