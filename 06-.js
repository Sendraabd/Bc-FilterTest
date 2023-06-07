//1
function digits(array) {
  const arr = parseInt(array.join(""));
  const sum = arr + 1;
  const arrsum = sum.toString().split("").map(Number);
  return arrsum;
}
const array = [1, 2, 3];
console.log(digits(array));

//2
function digits2(array2) {
  const arr2 = parseInt(array2.join(""));
  const sum2 = arr2 + 1;
  const arrsum2 = sum2.toString().split("").map(Number);
  return arrsum2;
}
const array2 = [4, 3, 2, 1];
console.log(digits(array2));

//3
function digits(array3) {
  const arr3 = parseInt(array3.join(""));
  const sum3 = arr3 + 1;
  const arrsum3 = sum3.toString().split("").map(Number);
  return arrsum3;
}
const array3 = [9];
console.log(digits(array3));
