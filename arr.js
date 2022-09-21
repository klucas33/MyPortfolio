let myGood = [1, 2, 3, 4];

console.log(myGood);

myGood.push(4);
console.log(myGood);

myGood.find(1);

for (let i in myGood) {
  console.log(myGood[i]);
}

for (let i of myGood) {
  console.log(i);
}
