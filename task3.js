let array = [];
for(let i =0; i < 5; i++) {
  array.push(i);
}
console.log("Sử dụng phương thức push()", array); // array =[0,1,2,3,4]

let a = 10;
array.unshift(a);
console.log("Sử dụng phương thức unshift()", array); // array=[10,0,1,2,3]

array.pop();
console.log("Sử dụng phương thức pop()", array); // aray=[10,0,1,2,3]

array.shift()
console.log("Sử dụng phương thức shift()", array); // array= [0,1,2,3]

array.splice(1,2)
console.log("Sử dụng phương thức splice()", array); // array =[0,3]