function sayHi() {
  // statements
  return "hi";
  return "world"; // was never executed
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
  yield "hey";
  yield "world";
  yield "everyone";
  // statements
  return "hi";
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator);
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGeneratorForOf = sayHiGenerator();

for (const iterator of resultGeneratorForOf) {
  console.log(iterator);
}

function* newGenerator() {
  yield "something";
  const final = yield "give me a value";
  return final;
}

const newGeneratorIterator = newGenerator();

console.log(newGeneratorIterator.next());
console.log(newGeneratorIterator.next());
console.log(newGeneratorIterator.next("some value"));
