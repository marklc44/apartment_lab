var expect = require("chai").expect,
  Manager = require("../../src/people/manager.js"),
  Property = require('../../src/property_types/property.js');

describe("Manager", function(){
  var manager = new Manager("test", "test");

  beforeEach(function() {
  	manager = new Manager('test', 'test');
  });

  it('should create a person with name test', function() {
  	expect(manager.name).to.equal('test');
  });

  describe('#addProperty', function() {
  	var property = new Property('address');
  	it('should add property to properties array', function() {
  		var prop = new Property('address');
  		manager.addProperty(prop);
  		expect(manager.properties).to.deep.equal([prop]);
  	});
  });

  describe('#removeProperty', function() {
  	it('should remove from properties array', function() {
  		var prop = new Property('address');
  		var prop2 = new Property('address');

  		manager.addProperty(prop);
  		manager.addProperty(prop2);
  		manager.removeProperty(prop);
  		expect(manager.properties).to.deep.equal([prop2]);
  	});
  });

});