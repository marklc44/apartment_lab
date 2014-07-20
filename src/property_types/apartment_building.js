var property = require("./property.js");

function ApartmentBuilding(name, address) {
	this.name = name;
	this.address = address;
  // A building can have many many units 
  this.maxUnits = 20;
}

module.exports = ApartmentBuilding;