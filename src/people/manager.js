var Person = require("./person");
var inherit = require('../inherit.js');

function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

// Inherit from Person
inherit(Manager, Person);

Manager.prototype.addProperty = function(property) {
  // add property from properties
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};

module.exports = Manager;