var expect = require("chai").expect,
  Unit = require("../src/unit.js");

var unit;
describe("Unit", function(){
	unit = new Unit(2, 'building', 800, 1000);
	it('should be unit #2', function() {
		expect(unit.number).to.equal(2);
	});
	it('should be building "building"', function() {
		expect(unit.building).to.equal('building');
	});
	it('should have sqft of 800', function() {
		expect(unit.sqft).to.equal(800);
	});
	it('should have rent of 800', function() {
		expect(unit.sqft).to.equal(800);
	});
});