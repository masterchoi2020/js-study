// 배열의 생성
var fruits = ['딸기', '포도', '복숭아', '사과'];


//배열의 길이 확인(length 매서드)
console.log(`배열의 요소 수: ${fruits.length}개`);


//배열의 요소 수정
fruits[1] = '수박'
console.log(fruits);


//배열의 요소 추가(length가 n이면, 요소는 0 ~ n-1 까지 존재)
fruits[4] = '파인애플';
console.log(fruits);
console.log(`배열의 요소 수: ${fruits.length}개`);

fruits[fruits.length] = '망고';
console.log(fruits);
console.log(`배열의 요소 수: ${fruits.length}개`);


//배열의 요소 참조
var apple = fruits[3];
console.log(`배열의 4번째 요소: ${apple}`);


//배열의 요소 전체 반복
console.log("==========================");

fruits[fruits.length] = '자몽';
fruits[fruits.length] = '오렌지';

for(var i=0; i < fruits.length; i++){
    console.log(`${i+1}번째 과일: ${fruits[i]}`);
}