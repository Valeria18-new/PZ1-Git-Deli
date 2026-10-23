const assert = require("assert");
const { sum, subtract } = require("./calculator");

assert.strictEqual(sum(2, 3), 6);
assert.strictEqual(subtract(10, 4), 6);
assert.strictEqual(subtract(3, 5), -2);

console.log("Все тесты успешно пройдены");