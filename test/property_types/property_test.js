var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js");

console.log("Write some test for Property...");

describe("Property", function(){
  var property = new Property('address');
  it('should set property.address to "address"', function() {
  	expect(property.address).to.equal('address');
  });
});