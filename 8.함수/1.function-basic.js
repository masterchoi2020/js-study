//함수는 만들어 놓고 함수를 호출하지 않으면 혼자 실행되지 않는다.
//함수는 코드 실행시점을 개발자가 선택할 수 있다.

//함수의 정의 
function calculateTotal(x) {
    console.log('함수실행');
    
    var total = 0;
    for(var n=1; n <= x; n++){
        total += n;
    }
    return total;
}
console.log('안녕하세요!');


//함수호출(함수 이름을 불러주면 호출됨)
calculateTotal(10);

var result = calculateTotal(100);
console.log(result);
console.log(calculateTotal(50));

//함수 리터럴을 사용하여 함수정의하기
//리터럴은 표현식이라 {}뒤에 ;(세미콜론을 붙여야 한다.)
//함수정의시 {} 는 블럭이므로 뒤에 ;(세미콜론을 붙이지 않는다.예)for, 객체새성시 {})
var add = function(x, y){
    return x + y;
};
console.log(add(10,20));
console.log(add(100,200));
console.log(add(-10,-20));

/* 아래의 함수 정의와 위의 함수 리터럴을 이용한 함수정의는 동일한 함수
function add(x, y){
    return x + y;
}
*/

console.log("========================");

//함수 이름을 변수에 할당하여 사용 가능
var ct = calculateTotal;

console.log(ct(10));
console.log(ct(100));
console.log(ct(20));