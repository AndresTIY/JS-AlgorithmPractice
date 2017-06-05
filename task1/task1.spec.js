var isSwapped = require("./task1.js");

describe("isSwapped", function() {
  it("first test", function() {
    var result = isSwapped([1, 2, 3, 4]);
    expect(result).toEqual(true);
  });
  it("second test", function() {
    var result = isSwapped([1, 2, 4, 3]);
    expect(result).toEqual(true);
  });
  it("third test", function() {
    var result = isSwapped([3, 2, 3, 7]);
    expect(result).toEqual(true);
  });
  it("fourth test", function() {
    var result = isSwapped([5, 8, 2, 1]);
    expect(result).toEqual(false);
  });
});
