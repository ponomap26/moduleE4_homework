function takeArguments(str, obj) {
  return obj.hasOwnProperty(str);
}
let object = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(takeArguments("name", object));
console.log(takeArguments("salary", object));