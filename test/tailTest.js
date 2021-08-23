const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const chai = require("chai");

describe("tail()", () => {

  it("returns [6,7,8] for [5,6,7,8]", () => {
    chai.assert.deepEqual(tail([5,6,7,8]), [6,7,8]);
  });

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    chai.assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});