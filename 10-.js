//1
function InsertArray(array) {
  const length = array.length;
  array.unshift(9);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

const array = [4, 7, 1, 20];
const insArray = InsertArray(array);

console.log(insArray);

//2
function InsertArray2(array2) {
  const length2 = array2.length;
  array2.unshift(7);
  for (let i = 0; i < length2; i++) {
    for (let j = 0; j < length2; j++) {
      if (array2[j] > array2[j + 1]) {
        const temp2 = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp2;
      }
    }
  }

  return array2;
}

const array2 = [3, 5, 2];
const insArray2 = InsertArray2(array2);

console.log(insArray2);

//3
function InsertArray3(array3) {
  const length3 = array3.length;
  array2.unshift(7);
  for (let i = 0; i < length3; i++) {
    for (let j = 0; j < length3; j++) {
      if (array3[j] > array3[j + 1]) {
        const temp3 = array3[j];
        array3[j] = array3[j + 1];
        array3[j + 1] = temp3;
      }
    }
  }

  return array3;
}

const array3 = [2, 14, 10, 1, 11, 12, 3, 4];
const insArray3 = InsertArray2(array3);

console.log(insArray3);
