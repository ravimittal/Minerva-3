'use strict';

/**
 * @ngdoc function
 * @name minerva3App.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the minerva3App
 */
angular.module('minerva3App').controller('NavigationCtrl', function ($scope, $mdSidenav) {
	$scope.state = false;
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
	$scope.toggleState = function() {
		$scope.state = !$scope.state;
	};
});
