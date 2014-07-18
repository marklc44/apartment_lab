var Person = require("./person.js");
var inherit = require('../inherit.js');

function Tenant(name, contact) {
  this.name = name;
  this.contact = contact;
  this.references = [];
};

inherit(Tenant, Person);

Tenant.prototype.addReference = function(reference){
  if (reference.constructor === Person) {
  	this.references.push(reference);
  }
};

module.exports = Tenant;
