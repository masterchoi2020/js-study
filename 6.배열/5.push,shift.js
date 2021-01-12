
var foods = ['볶음밥', '닭강정','피자'];

console.log(foods);

// pop(): 배열의 맨 마지막 요소를 제거하고 제거한 요소를 반환한다.
var lastElement = foods.pop();
console.log(`제거된 마지막 요소: ${lastElement}`);  //요소가 반환되는 것 확인
console.log(foods);

// push(): 배열의 맨 마지막에 요소를 추가한다.
foods.push('파스타');
console.log(foods);

foods.push('족발');
console.log(foods);

// shift():배열의 맨 첫번째 요소를 제거하고 제거한 요소를 반환한다.
var firstElement = foods.shift();
console.log(`제거된 첫번째 요소: ${firstElement}`);  //요소가 반환되는 것 확인
console.log(foods);

// unshift(): 배열의 맨 첫번째 위치에 요소를 추가한다.
foods.unshift('떡볶이');
console.log(foods);

