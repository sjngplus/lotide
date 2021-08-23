const middle = require('../middle').middle;
const assertArraysEqual = require('../assertArraysEqual');
const chai = require('chai');


describe("tail()", () => {

  it("returns [3] for [2, 3, 4]", () => {
    chai.assert.deepEqual(middle([2, 3, 4]), [3]);
  });

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    chai.assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

});