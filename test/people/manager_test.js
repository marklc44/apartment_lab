var expect = require("chai").expect,
  Manager = require("../../src/people/manager.js");

describe("Person", function(){
  var manager = new Manager("test", "test");

  it('should create a person with name test', function() {
  	expect(manager.name).to.equal('test');
  });
});