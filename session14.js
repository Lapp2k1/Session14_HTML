let a = ["a", "b", "c","d", "e", "f"];
let b = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log("length =", a.length);

console.log(a[2]);
a.unshift("top")
a.push("last")
console.log(a);
a.splice(2,1,"mid", "mid3");

console.log(a);
a.shift()
a.pop()
a.splice()
