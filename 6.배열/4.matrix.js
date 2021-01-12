
//2차원 배열

//우리반 학생(4명)의 수학점수 관리
// var mathScores = [67, 89, 92, 32];

//우리반 학생(4명)의 영어점수 관리
// var engScores = [100, 87, 55, 77];


//우리반 학생(4명)의 4과목 (국, 영, 수, 탐) 점수 관리 
//2차원 배열로 각각의 1차원 배열이 학생 1명의 국,영,수,탐 점수로 생각
var scores = [
    [88, 45, 82, 100],
    [100, 87, 55, 77],
    [67, 89, 92, 32],
    [100, 100, 92, 44]
];

console.log(scores.length);  //전체 1차원 배열의 개수: 4 출력
console.log(scores[2]);  //3번째 학생의 국,영,수,탐 점수
console.log(scores[1][2]); //2번째 학생의 3번째요소인 수학성적

console.log("========================");

/*
for (var scoreArray of scores){
    console.log(scoreArray);  //2차원 배열의 각 요소(1차원 배열(학생별 성적들))

    console.log('-------------');
    for(var score of scoreArray){
        console.log(score);   //1차원 배열의 각 요소(국,영,수,탐 점수)
    }
}
*/

//반 전체 총점을 저장할 변수
var ourClassScoresAvgTotal = 0;

//학생들의 출석번호 시퀀스
var stuNum = 1;

//국어 점수 총점
var subjectKorTotal = 0;

for (var scoreArray of scores){

    //학생 한명의 점수 배열(scoreArray)에서 0번 인덱스만 추출해서 누적
    subjectKorTotal += scoreArray[0]

    var eachTotal = 0;  //학생 한명의 총점
    for(var score of scoreArray){
        eachTotal += score;
    }
    
    var eachAvg = eachTotal / scoreArray.length;

    //개인별 평균점수를 구한 후 모두 합산
    ourClassScoresAvgTotal += eachAvg;

    console.log(`${stuNum}번 학생: 총점-${eachTotal}점, 평균-${eachAvg}점`);
    stuNum++;
}

var ourClassAvg = ourClassScoresAvgTotal / scores.length;
console.log(`우리반 평균: ${ourClassAvg}점`);

//국어 점수 평균
var subKorAvg = subjectKorTotal / scores.length;
console.log(`국어 평균: ${subKorAvg}점`);





console.log("================================");

// 3차원 배열
var arr3d = [
    [
        [1,2,3],[4,5,6],[7,8,9]
    ],
    [
        [10,11,12],[13,14,15],[16,17,18]
    ],
    [
        [19,20,21],[22,23,24],[25,26,27]
    ]
];

console.log(arr3d[1]);
console.log(arr3d[1][2]);
console.log(arr3d[1][2][0]);

