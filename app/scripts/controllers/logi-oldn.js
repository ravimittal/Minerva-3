'use strict';

/**
 * @ngdoc function
 * @name yeoman2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yeoman2App
 */
angular.module('minervaApp')
  .controller('LoginCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.checkcreds = function(){
		var email=$scope.email;
		var password=$scope.password;
		if(email=='test@test.com' && password=='test'){
			$scope.validAuth=true;
		}else{
			$scope.validAuth=false;
		}
		return true;
	}
  });
