/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

/*
<힌트>
 1단계: 컴퓨터가 랜덤한 문제 2개를 내야한다 -> 2개의 랜덤숫자 만들어 변수에 담아둔다.
 2단계: 프롬프트에 답을 입력할 수 있도록 +prompt(); 문제와 함께 화면에 띄움
 3단계: 문제합과 사용자 합이 일치하는 확인-> 정답/오답 출력
 4단계: 정답을 맞추면 정답카운트 올리고, 오답시 카운트 오답 카운트를 올릴 변수 생성
*/


/*

//정답 및 오답 횟수를 카운트할 변수
var okCount=0;
var noCount=0;

//문제가 지속적 출제되도록 무한루프(while(true)) 사용
while(true){

    //  0~100사이의 무작위 두 수를 저장할 변수 
    var rn1 = Math.floor(Math.random() * 101);
    var rn2 = Math.floor(Math.random() * 101);

    // 실제 정답이 저장될 변수
    var rnresult = rn1 + rn2 ;

    // 사용자가 입력한 값(답)을 저장할 변수
    var UserInput = +prompt(`${rn1} + ${rn2} = ??`)

    //사용자가 0을 입력하면 문제 출제를 중단
    if(UserInput ===0) {
        break;

    //올바른 답을 입력할 시 “정답입니다" 및 카운트 증가
    }else if (UserInput === rnresult){
        alert(`정답입니다.`);
        okCount++;
    }else{
        alert('오답입니다.');
        noCount++;
    }
}
alert(`누적된 정답 횟수:${okCount}, 오답 횟수:${noCount}`)

*/



//정답 및 오답 횟수를 카운트할 변수
var okCount=0;
var noCount=0;

while (true) {
   
   //0~100사이의 무작위 두 수를 저장할 변수 
   var rn1 = Math.floor(Math.random() * 101);
   var rn2 = Math.floor(Math.random() * 101);

   //랜덤 숫자 0,1 이 등장하도록 변수 선언.
   //0: +, 1: - 
   var operatorNumber = Math.floor(Math.random() * 2);

   //랜덤 연산자 기호 만들기
   var operatorMark = (operatorNumber === 0) ? '+' : '-';
   /*
  
   var operatorMark;
   if (operatorNumber === 0) {
      operatorMark = '+';
   } else {
      operatorMark = '-';
   }
   */

   // 실제 정답이 저장될 변수
   var rnresult ;

   if (operatorMark === '+') {
      rnresult = rn1 + rn2 ;
   } else {
      rnresult = rn1 - rn2 ;
   }

   // 사용자가 입력한 답안
   var UserInput = +prompt(`${rn1} ${operatorMark} ${rn2} = ??`);
   // alert(typeof UserInput);
   
   if (UserInput === 0) {
      break;
   }
   
   //정답 오답 판별
   if (UserInput === rnresult) {
      alert('정답입니다!');
      okCount++;
   } else {
      alert('오답입니다!');
      noCount++;
   }
}//반복문 종료

alert(`프로그램이 종료되었습니다.
\n# 정답 횟수: ${okCount}회, 오답 횟수: ${noCount}회`);
