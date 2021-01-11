// continue 의미: 이번에는 skip하고 다음 회차으로 넘어가라

/*
for (var i = 1; i < 11; i++){
    if ( i === 5){
        continue;       //만약 i 가 5라면 이번회차는 skip하고 다음 회차로 넘어가라
    }
    console.log(i);
}
console.log('반복문 종료');
*/

while(true){
    var n = +prompt('정수를 입력하세요.');

    if(n===0){
        break;
    }else if (n === 1){
        continue;
    }
    alert('메롱메롱');
}

