//중첩 반복문

/*
for(var dan = 2; dan < 10; dan++){

    console.log('================================');
    console.log(`구구단 ${dan}단`);
    console.log('================================');

    for(var hang=1; hang < 10; hang++){

        console.log(`${dan} x ${hang} =  ${dan * hang}`);
    }
}
*/

for (var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        for (var k = 0; k < 2; k++){
            console.log(`${i} ${j} ${k}`);
        }
    }
}