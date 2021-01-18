
var week = ['월','화','수','목','금','토','일'];

//배열 전체를 사용할 때 for ~ of 사용하는것이 좋음
for (var day of week){
    console.log(`${day}요일`);
}

console.log('============================');
//특정 요소만을 제어하기 위해서는 index로 제어해야 하므로 일반 for문이 좋다.
for(var i=0; i < week.length; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(`${week[i]}요일`);
}
