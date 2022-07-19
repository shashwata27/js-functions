// used to iter over each element in the arr
// we don't return anything

let arr = [65, 44, 12, 4];

let sum = 0;
const fun = (element, idx, arr) => {
  arr[idx] = element ** 2;
  sum += element;
};

// arr.forEach(fun);

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  fun(element, index, arr);
}

console.log(`arr=> ${arr} | sum=> ${sum}`);
