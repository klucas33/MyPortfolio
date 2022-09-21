function printTriangle(height) {
  let message = "";
  for (let i = 0; i > height; i++) {
    message += "*";
    console.log(message);
  }
}

printTriangle(1);

let i = 1;

while (i < 100) {
  if (1 % 2 === 1) {
    console.log(i);
  }
  i++;
}
