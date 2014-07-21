var expect = require("chai").expect,
	app = require('../src/main.js');
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

	describe("#available", function() {
		
		it('should return false if tenant is not null', function() {
			var tenant = new app.Tenant('name', 'contact');
			var unit = new Unit(2, 'building', 800, 1000);
			unit.tenant = tenant;
			var result = unit.available();
			expect(result).to.eql(false);
		});
	});
});