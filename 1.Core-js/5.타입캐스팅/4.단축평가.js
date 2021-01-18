//OR 연산자
console.log('Hello' || 'World');
console.log('' || '안녕');
console.log('잘가' || '');
console.log("--------------------------");



//AND 연산자
console.log('Hello' && 'World');
console.log('' && '안녕');
console.log('잘가' && 'NaN');
console.log("=======================");

//응용법
var x = 20;

/*
if(x > 10){
    console.log(('x는 0보다 큽니다.'));
}
*/

x > 0 && console.log('x는 0 보다 큽니다.');

