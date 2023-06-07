//output hasil ke 1
function sumzero(array) {
  let outputzero = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let u = j + 1; u < array.length; u++) {
        if (array[i] + array[j] + array[u] == 0) {
          const zero = array[(i, j, u)];
          outputzero.push(zero);
        }
      }
    }
  }

  return outputzero;
}
const array = [-1, 0, 1, 2, -1, 4];
console.log(sumzero(array));
