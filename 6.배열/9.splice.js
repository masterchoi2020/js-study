
//splice() : 배열의 특정요소 제거
var foods = ['떡볶이','오뎅','김말이','닭꼬치'];

//splice()메서드 내부에는 index값 2개 입력 필수: 삭제할 index, 삭제 개수
// foods.splice(1,1); //오뎅만 삭제
// foods.splice(1,2); //오뎅, 김말이 삭제
// foods.splice(2,1); //김말이 하나만 삭제


//splice()는 삭제한 요소들을 다시 배열로 저장시킬 수 있습니다.
//splice()이후 결과 값을 다시 배여로 가져오기
//foods 배열에서 1번 index부터 2개 제거

/*
var delFoods = foods.splice(1,2);
console.log(foods);
console.log(delFoods);
*/

console.log("================================");
//특정 요소를 삭제하고 그 위치에 '치킨'삽입
// foods.splice(0, 1, '치킨');
foods.splice(0, 1, '치킨', '피자');
console.log(foods);

//2번 index자리에 아무것도 지우지 않고 그 사이에 '파스타' 넣기
foods.splice(2, 0, '파스타');
console.log(foods);

//2번 index부터 끝까지 전체 삭제
foods.splice(2);
console.log(foods);


//특정 요소를 탐색하여 삭제
console.log("=================================");

foods.push('보쌈','닭발');
console.log((foods));

//사용자의 요청에 맞는 데이터 삭제
var input = '피자';
//삭제할 데이터가 배열에 있으므로 삭제할 데이터의 index값을 찾아 삭제
// index값을 찾을 땐, indexOf()메서드 사용
// foods.splice(foods.indexOf(input), 1);
// console.log(foods);

if(foods.includes(input)){
    foods.splice(foods.indexOf(input), 1);
    console.log(`${input} 삭제 완료`);
}else{
    console.log(`${input} 데이타가 존재하지 않습니다.`);
}
console.log(foods);
