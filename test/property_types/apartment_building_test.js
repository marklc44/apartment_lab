var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  ApartmentBuilding = require("../../src/property_types/apartment_building.js");

describe("ApartmentBuilding", function(){
  var aptBldg = new ApartmentBuilding('name', 'address');
  it('should set aptBldg.address to "address"', function() {
  	expect(aptBldg.address).to.equal('address');
  });
  it('should set aptBldg.name to "name"', function() {
  	expect(aptBldg.name).to.equal('name');
  });
});