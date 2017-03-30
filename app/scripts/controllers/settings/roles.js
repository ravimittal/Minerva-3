'use strict';

/**
 * @ngdoc function
 * @name minervaApp.controller:SettingsRolesCtrl
 * @description
 * # SettingsRolesCtrl
 * Controller of the minervaApp
 */
angular.module('minervaApp')
  .controller('SettingsRolesCtrl', function ($scope, $http, $mdDialog, $document, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.role = [];
    $scope.roles = [];
    $http.get($rootScope.httpServices+"settings/roles/view")
	.then(function (response) {$scope.roles = response.data.roles;});
	$scope.addNewRole = function(role) {
		var req = {
		 method: 'POST',
		 url: $rootScope.httpServices+'settings/roles/create',
		 headers: {
		   'Content-Type': 'text/plain'
		 },
		 data: { role_name: role.name, role_permissions: role.permission, role_websites: role.website }
		}

		$http(req).then(function(){
			role.message = "Role saved successfully";
			role.name = role.permission = role.website = "";
			$scope.refresh();
			$scope.closeDialog();
		});
	};
	$scope.refresh = function(){
		$http.get($rootScope.httpServices+"settings/roles/view")
			.then(function (response) {$scope.roles = response.data.roles;});
	}
	$scope.openContactDialog = function(ev, roles) {
		$mdDialog.show({
			controller         : 'SettingsRolesCtrl',
			controllerAs       : 'vm',
			templateUrl        : 'views/settings/roles-create.html',
			parent             : angular.element($document.find('#content-container')),
			targetEvent        : ev,
			clickOutsideToClose: true
		});
		jQuery('.sec-contact-tab').css('display','none');
		jQuery('.third-contact-tab').css('display','none');
	};
	$scope.closeDialog = function()
	{
		$mdDialog.hide();
	};
  });
