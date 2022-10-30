//push , pop,  shift ,unshift , splice ,slice  and  reverse methods and length property

const arr = ["pranali","divya","shraddha","vaibhavi","supriya"]

console.log(arr);

arr.push( "abc");

console.log(arr);

arr.pop();
arr.pop();

console.log(arr);

console.log(arr.length);

arr.unshift("abc");
console.log(arr)

arr.shift();
console.log(arr);

arr.splice(2,0,"pqr")
console.log(arr);

arr.slice(1, 3);
console.log(arr);

arr.reverse();
console.log(arr);



