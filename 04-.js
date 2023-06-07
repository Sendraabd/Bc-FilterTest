//output 0,1
function sum(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == 9) {
        output.push(i, j);
      }
    }
  }

  return output;
}
const array = [2, 7, 11, 15];
console.log(sum(array));

//output 0,2
function sum2(array2) {
  let output2 = [];

  for (let i = 0; i < array2.length; i++) {
    for (let j = i + 1; j < array2.length; j++) {
      if (array2[i] + array2[j] == 6) {
        output2.push(i, j);
      }
    }
  }

  return output2;
}
const array2 = [3, 2, 3];
console.log(sum2(array2));

//output 1,2
function sum3(array3) {
  let output3 = [];

  for (let i = 0; i < array3.length; i++) {
    for (let j = i + 1; j < array3.length; j++) {
      if (array3[i] + array3[j] == 6) {
        output3.push(i, j);
      }
    }
  }

  return output3;
}
const array3 = [3, 2, 4];
console.log(sum3(array3));

//output 0,1
function sum4(array4) {
  let output4 = [];

  for (let i = 0; i < array4.length; i++) {
    for (let j = i + 1; j < array4.length; j++) {
      if (array4[i] + array4[j] == 6) {
        output4.push(i, j);
      }
    }
  }

  return output4;
}
const array4 = [3, 3];
console.log(sum4(array4));
