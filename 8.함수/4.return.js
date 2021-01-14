function add(n1, n2){
    return n1 + n2;
}
var result = add(10, 20);
console.log(result);
console.log(add(30,50));

var x = add(add(add(5,5), 100), 200);
console.log(`x: ${x}`);



function addFor3(n1, n2, n3){
    return add(n1, n2) + n3;
}

var y = addFor3(3, 4, 5)
console.log(`y: ${y}`);


//void()함수: return 이 없는 경우
function greeting(nickname){
    console.log(`${nickname}님 안녕하세요.`);
}

greeting('김개똥');
greeting('박쥐똥');


//void()함수 : 결과만 보여주고 말 행도, 리턴 값을 사용할 일이 없을 경우 사용
//return이 없는 void함수는 변수에 저장하지 마세요(undefined로 저장됨)
function showMuliply(n1, n2){
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
showMuliply(10, 20);




//반복문에서 탈출: break, continue 사용
//함수에서 탈출: retrun (return 이후의 코드는 실행되지 않는다.)
//함수에서 break기능으로 사용가능(기본: 반복문에 return 사용 안됨)
function inLoofing(){
    var n = 1;
    while(true){
        console.log(n);
        if(n===10){
            // break;
            return; //함수 내부이기 때문에 return을 break처럼 사용가능
        }
        n++;
    }
}
// inLoofing();

//함수가 리턴할 수 있는 데이터는 단 하나입니다.
//2개의 정수를 전달 받아 덧셈,뺄셈, 곱셈, 나눗셈 결과를 모두 리턴하고 싶다면??
//배열 또는 객체를 이용
function operateAll(n1, n2){
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };
}

//함수를 호출하여 리턴한 값을 변수에 저장해서 사용하면 메모리를 효율적으로 사용할 수 있다.
var result = operateAll(10, 5);
console.log(result);
console.log(`덧셈결과: ${result.plus}`);
console.log(`곱셈결과: ${result.multiply}`);

//console.log(operateAll(20,3).minus);  //operateAll()함수를 계산할때 마다 불러야 됨 => 비효율적


