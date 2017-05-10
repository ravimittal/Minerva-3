'use strict';

/**
 * @ngdoc function
 * @name minervaApp.controller:SettingsRolesdailogCtrl
 * @description
 * # SettingsRolesdailogCtrl
 * Controller of the minervaApp
 */
angular.module('minervaApp')
  .controller('SettingsRolesdailogCtrl', function ($scope, $rootScope, $mdDialog, $http, role, roles) {
    var vm = this;
	vm.closeDialog = closeDialog;
	vm.role = role;
	vm.roles = roles;
	$scope.addNewRole = function(role) {
		if(role.id > 0){
			var reqUrl = $rootScope.httpServices+'settings/roles/edit';
		}else{
			var reqUrl = $rootScope.httpServices+'settings/roles/create';
		}
		var req = {
		 method: 'POST',
		 url: reqUrl,
		 headers: {
		   'Content-Type': 'text/plain'
		 },
		 data: { role_name: role.name, role_permissions: role.permission, role_websites: role.website, role_id: role.id }
		}
		$http(req).then(function(){
			role.name = role.permission = role.website = "";
			$scope.$emit('customEvent');
			closeDialog();
		});
	};
	function closeDialog()
	{
		$mdDialog.hide();
	};
  });
