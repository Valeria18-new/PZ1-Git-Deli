const assert = require("assert");
const { sum } = require("./calculator");

assert.strictEqual(sum(2, 3), 5);

console.log("Тест успешно пройден: 2 + 3 = 5");