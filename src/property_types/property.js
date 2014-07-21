var Manager = require('../people/manager.js'),
    Unit = require('../unit.js');

function Property(address) {
  this.address = address;
  this.units = [];
  this.maxUnits = 1;
  this.manager = [];
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
  // check if unit is available
  if(this.manager.length < 1) {
    return "This property doesn't have a manager.";
  } else if (tenant.references.length < 2) {
    return "This tenant doesn't have enough references.";
  } else if (!unit.available) {
    return "This unit is not available";
  } else if (this.units.length >= this.maxUnits) {
    return "There are no available units at this property.";
  } else {
    // the property itself may not have tenants, only units
    unit.tenant = tenant;
    this.units.push(unit);
    return true;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  this.units.splice(this.units[this.units.indexOf(unit), 1]);
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
