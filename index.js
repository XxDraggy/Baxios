import axios from "axios";

function a(promise) {}

// axios.get("https://dummyjson.com/products/1").then((a) => console.log(a));

var value;
var done = false;

axios
  .get("https://dummyjson.com/products/1")
  .then((promiseValue) => {
    console.log("a");
    value = promiseValue;
    done = true;
  })
  .catch((err) => {
    throw err;
  });

while (done == false) {}

console.log(value);
