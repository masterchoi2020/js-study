
//상위 조건이 하위조건을 포함하게 하면 안됨
//if 조건문은 else if 문과 하나의 그룹이다.
//(if문이 참이 되면 else if문은 더이상 체크하지 않는다.) 

var age = 21;

if (age >= 20) {
    console.log('성인 입니다.');
}else if (age >= 17) {
    console.log('고딩 입니다.');
}else if (age >=14) {
    console.log('중딩 입니다.');
}else if (age >= 8) {
    console.log('초딩 입니다.');
}else {
    console.log('미취학 입니다.');
}