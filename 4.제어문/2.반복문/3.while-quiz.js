/*
- Quiz1. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 사용자는 정수 2개를 각각 입력할 수 있어야 함.
2. 프로그램은 2번째 정수를 입력하고 엔터를 누르면 1번째 정수부터    
   2번째 정수까지의 총합(2번째 정수포함)을 출력해야 함.
3. 반복문 while을 사용할 것!
ex)  정수 3 , 7 을 입력했을 시 3 + 4 + 5 + 6 + 7 의 
     총합 25를 출력해야 함!
*/

/*
var sum = 0;
var num1 = +prompt('시작값으로 쓸 정수를 입력하세요.');
var num2 = +prompt(`끝값으로 쓸 정수를 입력하세요.`);

while (num1 <= num2) {
    sum += num1;
    num1++;
}
alert(`총 합은 ${sum}입니다.`);
*/


/*
- Quiz2. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 사용자는 정수 2개를 각각 입력할 수 있어야 함.
2. 프로그램은 2번째 정수를 입력하고 엔터를 누르면 1번째 정수부터    
   2번째 정수까지의 총합(2번째 정수포함)을 출력해야 함.
3. 반복문 while을 사용할 것! 
4. 입력 순서에 상관없이 작은 정수값이 시작값이 되고, 큰 정수값이 마지막 값이 되도록 작성
ex)  정수 3 , 7  또는 7, 3을 입력했을 시 3 + 4 + 5 + 6 + 7 의 
     총합 25를 출력해야 함!

     출력메시지는 " 3에서 7까지의 총합은 25입니다."
*/

var sum = 0;
var num1 = +prompt('시작값으로 쓸 정수를 입력하세요.');
var num2 = +prompt(`끝값으로 쓸 정수를 입력하세요.`);

if (num1 >= num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
}

var n = num1;

while (n <= num2) {
    sum += n;
    n++;
}

alert(`${num1}에서 ${num2}까지의 합은 ${sum}입니다.`);
