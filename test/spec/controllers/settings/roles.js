'use strict';

describe('Controller: SettingsRolesCtrl', function () {

  // load the controller's module
  beforeEach(module('minervaApp'));

  var SettingsRolesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingsRolesCtrl = $controller('SettingsRolesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SettingsRolesCtrl.awesomeThings.length).toBe(3);
  });
});
