// 0 ~ 5 까지의 랜덤값 산출(즉, 0이상 6미만 값)

/*
while(true){

    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤값: ${rn}`);

    if (rn === 3){
        console.log('반복문 종료');
        break;
    }
}
*/



var total = 0;

while(true){
    var number = prompt('숫자를 입력하세요.')
    if (number === '그만'){
        break;
    }
    total += +number; // + 는 문자를 숫자로 변환시켜 줌 (sting -> number 로 변환)
}
alert(`입력한 숫자의 총합: ${total}`)