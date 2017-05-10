'use strict';

/**
 * @ngdoc function
 * @name minervaApp.controller:SettingsRolesCtrl
 * @description
 * # SettingsRolesCtrl
 * Controller of the minervaApp
 */
angular.module('minervaApp')
  .controller('SettingsRolesCtrl', function ($scope, $http, $mdDialog, $document, $rootScope, $mdToast, filterFilter) {
	  $scope.roles = [];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function showToast(content, type) {
		$mdToast.show({
			template: '<md-toast>' + content + '</md-toast>',
			hideDelay: 3000,
			toastClass: type,
			position: 'top right left'
		});
	}
    $scope.role = [];
    $scope.selectedRoles = [];
    $http.get($rootScope.httpServices+"settings/roles/view")
	.then(function (response) {$scope.roles = response.data.roles;});
	$scope.update = function(user_id) {
		var req = {
				method: 'POST',
				url: $rootScope.httpServices+'settings/roles/get',
				headers: {
					'Content-Type': 'text/plain'
				},
				data: { id: user_id }
			}
		$http(req).then(function(response){
			$scope.role.title = "Edit Role";
			$scope.role.id = response.data.role.Role_Id;
			$scope.role.name = response.data.role.Role_Name;
			$scope.role.permission = response.data.role.Role_Permissions;
			$scope.role.website = response.data.role.Role_Websites;
			$scope.openContactDialog();
		});
	};
	$scope.openContactDialog = function(ev) {
		if(angular.isObject(ev)){
			$scope.role.title = "Add New Role";
		}
		$mdDialog.show({
			controller         : 'SettingsRolesdailogCtrl',
			controllerAs       : 'vm',
			templateUrl        : 'views/settings/roles-create.html',
			parent             : angular.element($document.find('#content-container')),
			targetEvent        : ev,
			clickOutsideToClose: true,
			locals             : {
                    role 	: $scope.role,
                    roles 	: $scope.roles
                }
		});
	};
	$rootScope.$on('customEvent', function(event) {
		showToast("Role saved successfully",'success');
		$scope.refresh();
    });
    $scope.toggleSelectRole = function(item, list){
		var idx = list.indexOf(item);
		if (idx > -1) {
		  list.splice(idx, 1);
		}
		else {
		  list.push(item);
		}
	};
	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};
	$scope.sizeOf = function(obj) {
		return Object.keys(obj).length;
	};
	$scope.deleteRoles = function() {
		var req = {
			method: 'POST',
			url: $rootScope.httpServices+'settings/roles/delete',
			headers: {
				'Content-Type': 'text/plain'
			},
			data: { ids: $scope.selectedRoles }
		}
		$http(req).then(function(response){
			$scope.selectedRoles = [];
			$scope.refresh();
			$scope.user.message = "User deleted successfully";
		});
	};
	$scope.refresh = function(){
		$http.get($rootScope.httpServices+"settings/roles/view")
			.then(function (response) {$scope.roles = response.data.roles;});
	};
	$scope.deleteRolesConfirm = function() {
		var confirm = $mdDialog.confirm()
			.title('Are you sure want to delete these roles?')
			.ariaLabel('delete role')
			.ok('OK')
			.cancel('CANCEL');

		$mdDialog.show(confirm).then(function ()
		{
			$scope.deleteRoles();
			showToast("Role(s) deleted successfully",'success');
			$scope.refresh();

		});
	};
});
