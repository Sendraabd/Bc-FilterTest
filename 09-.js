function minMaxArray(array) {
  const maxarr = Math.max.apply(null, array);
  const minarr = Math.min.apply(null, array);
  return {
    max: maxarr,
    min: minarr,
  };
}

const array = [2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
const result = minMaxArray(array);
console.log("Max =", result.max);
console.log("Min =", result.min);
