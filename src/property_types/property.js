var Manager = require('../people/manager.js'),
    Unit = require('../unit.js');

function Property(address) {
  this.address = address;
  this.units = [];
  this.maxUnits = 1;
  this.manager = [];
  this.tenants = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  if (this.manager.length < 1 && person instanceof Manager.constructor) {
    this.manager.push(person);
  } else {
    return "This property already has a manager.";
  }
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager[0];
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if(this.manager.length > 0 && tenant.references.length >= 2) {
    // the property itself may not have tenants, only units
    this.tenants.push(tenant);
    // also add tenant to unit
    unit.tenant = tenant;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  this.tenants.splice(this.tenants[this.tenants.indexOf(tenant), 1]);
  unit.tenants = null;
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return this.maxUnits - this.units.length;
}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units;
}


module.exports = Property;
