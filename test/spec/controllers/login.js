'use strict';
describe('Controller: LoginCtrl', function(){
	// load the controller's module
	beforeEach(module('minervaApp'));
	var LoginCtrl,scope;
	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		LoginCtrl=$controller('LoginCtrl',{
			$scope: scope
			// place here mocked dependencies
		});
	}));
	//~ it('should attach a list of awesomeThings to the scope', function () {
		//~ expect(LoginCtrl.awesomeThings.length).toBe(3);
	//~ });
	it('ensure invalid email addresses are caught', function () {
		//~ var $scope = {};
		//~ var controller = $controller('LoginCtrl', { $scope: $scope });
		scope.email='test@test.com';
		scope.password='test';
		scope.checkcreds();
		expect(scope.validAuth).toBe(true);
	});

	 // critical
    it('ensure invalid email addresses are caught', function() {});
    it('ensure valid email addresses pass validation', function() {});
    it('ensure submitting form changes path', function() { });

    // nice-to-haves
    it('ensure client-side helper shown for empty fields', function() { });
    it('ensure hitting enter on password field submits form', function() { });
	
});
