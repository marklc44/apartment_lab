var Person = require('./person.js'),
    Property = require('../property_types/property.js');
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
  if (property instanceof Property) {
  	this.properties.push(property);
    return true;
  }
  return false;
};

Manager.prototype.removeProperty = function(property) {
  if (property instanceof Property) {
    this.properties.splice(this.properties[this.properties.indexOf(property)], 1);
  }
  
};

module.exports = Manager;