var property = require("./property");

function TownHouse(address){
	this.address = address;
  // only has one unit per address

};

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

module.exports = TownHouse;
