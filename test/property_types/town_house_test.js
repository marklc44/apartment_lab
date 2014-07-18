var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  TownHouse = require("../../src/property_types/town_house.js");

describe("TownHouse", function(){
  var tHouse = new TownHouse('address');
  it('should set tHouse.address to "address"', function() {
  	expect(tHouse.address).to.equal('address');
  });
  

});