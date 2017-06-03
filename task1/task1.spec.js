var isSwapped = require("./task1.js");

describe("isSwapped", function() {
  it("first test", function() {
    var result = isSwapped([1, 2, 3, 4]);
    expect(result).toEqual(true);
  });
});
