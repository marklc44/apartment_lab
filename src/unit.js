function Unit (number, building, sqft, rent) {
  // set params above using this
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;

  this.tenant = null;
}

Unit.prototype.available = function(){
  // check for tenant
}

module.exports = Unit;

