'use strict';

/**
 * @ngdoc function
 * @name m3App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the m3App
 */
angular.module('minervaApp')
  .controller('LoginCtrl', function ($scope,loginservice,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.login=function(){
		loginservice.getlogin($scope.uname,$scope.pass).then(function(res){
			if(JSON.parse(res)){
				$location.path('/main');
			}else{
				$scope.errorMessage="Authentication Failed"
				//$location.path('/login');
			}
		});		
	}
  });
