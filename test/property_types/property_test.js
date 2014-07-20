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
  	it('should set property.manager to manager object', function() {
  		var manager = new app.Manager('name', 'contact');
  		property.setManager(manager);
  		expect(property.manager).to.eql([manager]);
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

  describe('#addTenant', function() {

  	it('should add a tenant if there is a manager and the tenant has 2 refs', function() {

      var tenant = new app.Tenant('name', 'contact');
      var person1 = new app.Person('name', 'contact');
      var person2 = new app.Person('name', 'contact');
      var manager = new app.Manager('name', 'contact');
      var unit = new app.Unit(1, 'building', 1000, 1000);

      tenant.references.push(person1);
      tenant.references.push(person2);
      property.setManager(manager);

  		property.addTenant(unit, tenant);
  		var tenants = property.tenants;
  		expect(tenants).to.eql([tenant]);
      expect(unit.tenant).to.eql(tenant);
  	});

  });

  describe('#removeTenant', function() {

    it('should remove a tenant', function() {

      var tenant = new app.Tenant('name', 'contact');
      var person1 = new app.Person('name', 'contact');
      var person2 = new app.Person('name', 'contact');
      var manager = new app.Manager('name', 'contact');
      var unit = new app.Unit(1, 'building', 1000, 1000);

      tenant.references.push(person1);
      tenant.references.push(person2);
      property.setManager(manager);

      property.addTenant(unit, tenant);
      property.removeTenant(unit, tenant);
      var tenants = property.tenants;
      expect(tenants).to.eql([]);
    });

  });

	describe('#rentedUnits', function() {
		it('should return the rented units', function() {
			var unit = new app.Unit(1, 'building', 1000, 1000);
  		property.units = [unit];
  		var result = property.rentedUnits();
  		expect(result).to.eql([unit]);
		});
	});


});



















