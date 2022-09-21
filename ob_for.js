let myObject = {
  1: "11",
  2: "22",
  3: "33",
};

for (let i in myObject) {
  console.log(i);
}

for (let i in myObject) {
  console.log(myObject[i]);
}

let myDate = new Date();
