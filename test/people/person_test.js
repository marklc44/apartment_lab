var expect = require("chai").expect,
  Person = require("../../src/people/person.js");

describe("Person", function(){
  var person = new Person("test", "test");

  it('should create a person with name test', function() {
  	expect(person.name).to.equal('test');
  });
});