const assert = require('chai').assert;
const head   = require('../assertEqual');
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual("Lighthouse", "Lighthouse"));
  });

  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual(1, 1));
  });

});