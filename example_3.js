function createObjectNotPrototype() {
  return Object.create(null);
}

let obj = createObjectNotPrototype();

console.log(obj.toString());
console.log(obj.constructor);