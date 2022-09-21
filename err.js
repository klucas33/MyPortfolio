const error = new Error();

try {
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
