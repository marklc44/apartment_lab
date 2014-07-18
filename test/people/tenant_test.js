var expect = require("chai").expect,
  Tenant = require("../../src/people/tenant.js"),
  Person = require("../../src/people/person.js");

describe("Person", function(){
  var tenant = new Tenant("test", "test");

  it('should create a person with name test', function() {
  	expect(tenant.name).to.equal('test');
  });

  describe('#addReference', function() {
		var ref = new Person('ref', 'contact');
		it('should add ref to references', function() {
			tenant.addReference(ref);
			expect(tenant.references).to.deep.equal([ref]);
		});
	});
	
});