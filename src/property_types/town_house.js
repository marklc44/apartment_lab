var property = require("./property");

function TownHouse(address){
	this.address = address;
  // only has one unit per address
  this.maxUnits = 1;
};

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

module.exports = TownHouse;
