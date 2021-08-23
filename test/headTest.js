const head = require('../head');
const assertEqual = require('../assertEqual');
const chai = require('chai')

describe("head()", () => {

  it("returns 5 for [5,6,7]", () => {
    chai.assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns '5' for ['5']", () => {
    chai.assert.strictEqual(head(['5']), '5'); 
  });

  it(`returns "Hello" for ["Hello", "Lighthouse", "Labs"]`, () => {
    chai.assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });

});
