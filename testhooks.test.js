const { after } = require("mocha");

describe('Mocha hooks', () => {
  
  before('This is execute before all test',() => {
    console.log("this is a before hook execute")
  });

  beforeEach('This hook execute before any test',() => {
  
    console.log("try to print ${b}")
  });

  after('This is going to exceute at the end ', () => {
    console.log("is the end of test")
  });

  afterEach('this hook',() => {

    console.log("try to print ")
  });

  it('Test 1', () => {
    let coffe = "brown";
    console.log(coffe);

  });

  it('Test 2', () => {
    let late = "light brown";
    console.log(late +" ");
  });

});
