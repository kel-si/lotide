const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns ['lighthouse', 'labs'] from ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']),['lighthouse', 'labs']);
  });
});

