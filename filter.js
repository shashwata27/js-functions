// creates a new array filled with elements that pass a test provided by a function.

let arr = [1, 22, 3, 20, -10, 40, 10];

const fun = (element) => element >= 10 && element <= 30;

// let res = arr.filter(fun);

let res = [];

for (const element of arr) {
  if (fun(element)) {
    res.push(element);
  }
}

console.log(res);
