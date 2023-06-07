//1
function isPalindrome(array) {
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (char === array[j]) {
        return true;
      }
    }
  }
  return false;
}
array = ["asep", "budi", "-", "budi", "asep"];
console.log(isPalindrome(array)); //true

//2
function isPalindrome2(array2) {
  for (let i = 0; i < lowercaseArray.length; i++) {
    let char2 = lowercaseArray[i];
    for (let j = i + 1; j < lowercaseArray.length; j++) {
      if (char2 === lowercaseArray[j]) {
        return true;
      }
    }
  }
  return false;
}
array2 = ["Tom", "Tim", "tim", "tom"];
const lowercaseArray = array2.map((element) => element.toLowerCase());
console.log(isPalindrome(lowercaseArray)); //true

//3
function isPalindrome3(array3) {
  const reversedArray = [...array3].reverse();

  for (let i = 0; i < array3.length; i++) {
    if (array3[i] !== reversedArray[i]) {
      return false;
    }
  }

  return true;
}

const array3 = ["tik", "tok", "toko", "tik"];
console.log(isPalindrome3(array3)); // Output: false
