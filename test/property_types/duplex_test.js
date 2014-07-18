var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Duplex = require("../../src/property_types/duplex.js");

describe("Duplex", function(){
  var duplex = new Duplex('address');
  it('should set duplex.address to "address"', function() {
  	expect(duplex.address).to.equal('address');
  });

});