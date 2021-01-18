
var greeting;
greeting = 'hello';
console.log(greeting);

greeting = "안녕하세요."
console.log(greeting);

greeting = `니하오마`
console.log(greeting);

console.log(typeof greeting);

//var exStr = "그는 나에게 "위험해!" 라고 말했다.";
var exStr = '그는 나에게 "위험해!" 라고 말했다.'
console.log(exStr);

var exStr = "그는 나에게 \"위험해!\" 라고 말했다."
console.log(exStr);

// exStr = 'Let's Go!';
exStr = "Let's Go!";
console.log(exStr);

// exStr = "Let's Go! "Together"";
exStr = `Let's Go! "Together"`;
console.log(exStr);


// 템플릿 리터럴 : 백틱(``)을 활용
console.log("=======================================");

var template = '<ul><li><a href="#">HOME</a></li></ul>' ;
console.log(template);

var template = '<ul>\n\t<li>\n\t\t<a href="#">HOME</a>\n\t</li>\n</ul>' ;
console.log(template);

var template = `<ul>
    <li>
        <a href="#">HOME</a>
    </li>
</ul>` ;
console.log(template);

console.log("=======================================");

var month = 4;
var day = 5;
var anniversary = '식목일';

// console.log(month + '월' + day + '일은 ' + anniversary + '입니다.');
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);


var a = "120";
var b = "100";
console.log(a + b);