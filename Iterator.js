let numbers = [1, 2, 3, 4, 6];
console.log(typeof numbers[Symbol.iterator]);
let itr = numbers[Symbol.iterator]();
console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next().value);
console.log(itr.next());
