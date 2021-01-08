/* 랜덤값(난수) 생성 함수
   Math.random();   -> 0.0이상 1.0미만의 랜덤값 생성
*/

var randomNumber = Math.random();
// console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log(`오늘의 추천음식: 짜장면`);
}else if (randomNumber > 0.33) {
    console.log(`오늘의 추천음식: 감자탕`);
}else {
    console.log(`오늘의 추천음식: 김밥`);
}

/* js 에서 정수 난수 생성을 위해 알아야 하는 함수
  Math.floor() : 내림값(버림), Math.ceil() : 올림값, Math.round() : 반올림
*/
console.log("==========================================");

console.log(Math.floor(3.3));
console.log(Math.ceil(3.3));
console.log(Math.round(3.3));

// 0이상 10미만의 랜덤 정수 만들기
// var randomInt = Math.random() * 10;
var randomInt = Math.floor(Math.random() * 10);
console.log(`랜덤 정수: ${randomInt}`);

/* x 이상 y미만의 랜덤 정수 생성 공식 
Math.floor(Math.random()* (y-x)) + x;
*/

// 11 ~ 38미만의 랜덤값 생성
var randomInt = Math.floor(Math.random() * 27) + 11;
console.log(`랜덤 정수: ${randomInt}`);

// 1 ~ 45 사이 랜덤값 ( -> 1 ~ 46미만의 값 생성)
var lottoNum = Math.floor(Math.random() * 45) + 1;
console.log(`랜덤 로또번호: ${randomInt}`);
