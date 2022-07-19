// map passed each element of an iterable through another function and produces a new iterable

let arr = [1, 2, 3, 4];

const fun = (element) => element * 10;

// let res = arr.map(fun);

let res = [];
for (const element of arr) {
  res.push(fun(element));
}

console.log(res);
