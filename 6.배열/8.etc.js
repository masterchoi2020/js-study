// 배열 메서드

var foods = ['떡볶이','오뎅','김말이','닭꼬치'];

//indexOf() 메서드: 배열요소의 인덱스를 알려준다.(탐색 실패시 -1을 반환)
var idx = foods.indexOf('김말이');
console.log(`찾은 인덱스: ${idx}번`);
var idx = foods.indexOf('순대');
console.log(`찾은 인덱스: ${idx}번`);


console.log("================================");
//include(): 배열요소의 존재 여부 확인
var result = foods.includes('닭꼬치');
console.log(`탐색결과: ${result}`);



//slice() : 배열을 잘라서 복사함
console.log("================================");

var arr = [0,1,2,3,4,5,6,7,8,9];

var slicedArr = arr.slice(3,7);   //slice(시작, 끝) ->시작이상 끝미만
console.log(slicedArr);

var slicedFoods = foods.slice(1,3);
console.log(slicedFoods);

//6번부터 끝가지 잘라서 복사
slicedArr = arr.slice(6);
console.log(slicedArr);

// 원본 배열에는 영향을 주지 않는다.
console.log(arr);


//reverse() : 배열을 역순으로 배치함
console.log("================================");

//resvers()는 원본 배열을 변화시킨다.
//원본 배열에 영향을 주지 않고 배열을 역순으로 배치할려면, 복사본을 만들어 사용해야 한다.
var copyArr = arr.slice(0);
copyArr.reverse();
console.log(copyArr);
console.log(arr); //원본 변화 없음

// arr.reverse();
console.log(arr);  //원본 자체가 변경됨

//join() : 배열의 요소들을 연결한 문자열로 변환
//join() 메서드에 구분자 문자열을 넣으면, 요소 사이에 삽입(기본값은 ,(쉼표)이다.)
var foodStr = foods.join('랑 ');
console.log(foodStr);

