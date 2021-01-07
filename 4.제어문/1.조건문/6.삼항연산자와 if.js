
var money = 2000;

// var food = money > 5000 ? '김치찌개' : '라면'
// console.log(`선택된 음식: ${food}`);

/*
var food;
if (money >= 5000) {
    food = '김치찌개';
}else {
    food = '라면'
}
console.log(food);
*/

/*
var food;
if (money >=5000) {
    food = '김치찌개';
}else if(money >= 3000) {
    food = '라면'
}else {
    food = '굶어'
}
console.log(food);
*/

var food = money >= 5000 ? '김치찌개' : money >=3000 ? '라면' : '굶어';
console.log(`선택된 음식: ${food}`);