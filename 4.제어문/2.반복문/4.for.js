//반복문(for, while)은 한번 들어가면 특정조건을 만족하기 전까지는 
// 절대 반복문을 빠져나오지 못한다.

// 1 ~ 10까지의 총합

/*
var total = 0;

var n = 1;
while(n <= 10) {
    total += n;
    n++;
}
console.log(`총합: ${total}`);
*/

var total = 0;

for(var n = 1; n <= 10; n++) {
    total += n;    
}
console.log(`총합: ${total}`);



// while.js 파일에서 작성했던 내용 for문으로 바꿔 작성하기
// 7 ~ 100 사이의 7의 배수를 모두 출력하기
 console.log("======================================");

 
 for(var num = 7; num <= 100; num += 7){
     console.log(`${num}`);
 }
 console.log(`while 종료 후 num: ${num}`);
 
 // 1 ~ 100 사이의 13의 배수 모두 출력하기
 console.log("======================================");
 
 
 
 for (var num = 1; num <= 100; num++) {
     if(num % 13 === 0) {
         console.log(`13의 배수 출력: ${num}`);
     }
 }
 
 //1~100 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기
 console.log("======================================");
 
 
 for(var num = 1; num <= 100; num++) {
     if(num % 6 === 0 && num % 12 !== 0){
         console.log(num);
     }
 }
 
 
 //1~4000 사이의 정수 중 9의 배수의 개수를 출력하기
 console.log("======================================");
 
 var count = 0;
 
 for (var num = 1; num <= 4000; num++) {
     if (num % 9 === 0){
         count++;
     }
 }
 console.log(`범위 내의 9의 배수의 개수는: ${count}개`);