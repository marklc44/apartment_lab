var expect = require("chai").expect,
  app = require("../../src/main.js");

describe("Property", function(){
  var property = new app.Property('address');

  beforeEach(function() {
  	property = new app.Property('address');
  });

  it('should set property.address to "address"', function() {
  	expect(property.address).to.equal('address');
  });

  describe('#availableUnits', function() {
  	it('should return number of available units', function() {
  		var unit = new app.Unit(1, 'building', 1000, 1000);
  		property.units = [unit];
  		var result = property.availableUnits();
  		expect(result).to.equal(0);
  	});
  });

  describe('#setManager', function() {
  	it('should set property.manager to bob', function() {
  		var manager = new app.Manager('name', 'contact');
  		property.setManager(manager);
  		expect(property.manager).to.eql(manager);
  	});
  });

  describe('#getManager', function() {
  	it('should return the manager object', function() {
  		var manager = new app.Manager('name', 'contact');
  		property.setManager(manager);
  		var result = property.getManager();
  		expect(result).to.eql(manager);
  	});
  });

  // describe('#addTenant', function() {
  // 	it('should add ', function() {
  // 		var tenant = new app.Tenant('name', 'contact');
  // 		var unit = new app.Unit(1, 'building', 1000, 1000);

  // 		property.addTenant(tenant, unit);
  // 		var result = property.getManager();
  // 		expect(result).to.eql(manager);
  // 	});
  // });

	describe('#rentedUnits', function() {
		it('should return the rented units', function() {
			var unit = new app.Unit(1, 'building', 1000, 1000);
  		property.units = [unit];
  		var result = property.rentedUnits();
  		expect(result).to.eql([unit]);
		});
	});


});



















