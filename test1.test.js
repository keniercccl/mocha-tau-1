//add
//sus
//mul
//div
var a = 10;
var b = 2;
var assert = require('assert');
describe('Test 1 - Operaciones matematicas', () => {
  it('La addicion', () => {
    var c = a+b;
    assert.equal(12,c, "this test fails");
  });

  it('La resta', () => {
    var c = a-b;
    assert.equal(8,c);
  });

  it('Los multiplica', () => {
    var c = a*b;
    assert.equal(20,c);
  });

  it('Los divide', () => {
    var c = a/b;
    assert.equal(5,c);
  });
})
