'use strict';

/**
 * @ngdoc function
 * @name minervaApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the minervaApp
 */
angular.module('minervaApp').controller('NavigationCtrl', function ($scope, $mdSidenav) {
	$scope.state = false;
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
	$scope.toggleState = function() {
		$scope.state = !$scope.state;
	};
});
