//segitiga dari 1
function segitiga(baris) {
  let num = 1;

  for (let i = 1; i <= baris; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
      line += num + j + " ";
    }

    console.log(line);
    num++;
  }
}
segitiga(7);

//segitiga dari 5
function segitiga2(baris2) {
  let num = 5;

  for (let i = 1; i <= baris2; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
      line += num + j + " ";
    }

    console.log(line);
    num++;
  }
}
segitiga2(7);
