
/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
    여기에는 학생들의 수학점수가 8개 저장됩니다.
    점수는 임의로 설정하세요.

    -요구사항:
    1.배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
    콘솔에 출력하세요.
    2.학생들의 점수가 추가되어도 코드를 건드리지 않아도 자동으로
    총점, 평균이 갱신되어야 합니다.
*/

// 배열 생성
var scores = [100, 80, 60, 50, 100, 80, 60, 50, 100];

// 총점을 저장할 변수
var sum = 0;


/*방법1 : for문 사용해서 총점 계산
for (i=0; i < scores.length; i++) {
    sum += scores[i];
}
*/

/*방법2: for ~ of 를 사용해 총점 계산
for(var score of scores){
    sum += score;
}
*/


// 평균을 저장할 변수
var avg = sum/scores.length
// console.log(`학생들 수학 총점: ${sum}점, 평균: ${avg}점`);

//만약 학생들의 평균을 소수점 자리 n번째 까지 출력하고 싶을 경우
//소수점 2자리: Math.round(avg * 100) / 100;
//소수점 3자리: Math.routd(avg * 1000) / 1000;

var prettierAvg = Math.round(avg*100) / 100;
console.log(`학생들 수학 총점: ${sum}점, 평균: ${prettierAvg}점`);

