// 아래 false로 판단하는 5가지 경우를 제외하고는 모두 true로 판단.
// false 판단 5가지: undefined, null, 0, NaN, ""(빈문자열)

if('') console.log('OK1');
if('hello') console.log('OK2');
if(undefined) console.log('OK3');
if(null) console.log('OK4');
if(350) console.log('OK5');
if(NaN) console.log('OK6');
if(0) console.log('OK7');
if([1,2,3]) console.log('OK8');