var property = require("./property");

function Duplex(address) {
	this.address = address;
  // A duplex only has 2 units;
  this.maxUnits = 2;
}
module.exports = Duplex;