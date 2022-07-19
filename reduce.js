// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// returns a single value after operating on each value of arr
// total is used to store the total value after each iter

const arr = [15.5, 2.3, 1.1, 4.7];

const fun = (total, element, idx) => {
  console.log(`total=> ${total} | current=> ${element} | index=> ${idx}`);
  return total * idx - element;
};

// let res = arr.reduce(fun, 10);

let res = 10;

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  res = fun(res, element, index);
}

console.log(res);
