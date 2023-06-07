function BandingArrays(array1, array2) {
  const same = [];
  const different = [];

  array1.pop();
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      same.push(array1[i]);
    } else {
      different.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      different.push(array2[i]);
    }
  }

  return {
    same,
    different,
  };
}

const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

const result = BandingArrays(array1, array2);
console.log("Same =", result.same);
console.log("Different =", result.different);
