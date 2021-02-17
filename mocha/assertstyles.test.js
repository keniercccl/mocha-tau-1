const chai = require('chai');

//expect
const expect = chai.expect;

// expect API examples

// let a = 1;
// let b = 2;

// expect(a).to.be.eq(b, 'a is not the same than b');

//obj / str/ boo

function myObj() {
  return({
    a:100,
  });
}

x = new myObj();
y = new myObj();

describe('test with chai', () => {
  it('this an objetc', () => {
    expect(x).to.be.an('object');
  })

  it('this objets are equal', () => {
    expect(x).to.be.deep.eq(y, 'x and y is no equals');
  })

  it('chaining expressions', () => {
    expect(x).to.be.an('object').and.to.be.deep.equal(y, "this cant be true");
  })
})