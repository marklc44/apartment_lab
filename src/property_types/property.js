function Property(address) {
  this.address = address;
  this.units = [];
  this.maxUnits = 1;
  this.manager;
  this.tenants = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references

};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return this.maxUnits - this.units.length;
}

Property.prototype.rentedUnits = function(){
  // return rented units
  return
}


module.exports = Property;
