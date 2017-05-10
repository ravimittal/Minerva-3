'use strict';

/**
 * @ngdoc function
 * @name m3App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the m3App
 */
angular.module('minervaApp')
  .controller('LoginCtrl', function ($scope,loginservice,$location,sessionService) {
    $scope.login=function(){
		$scope.loadingmessage='Please wait....';
		$scope.errorMessage='';
		loginservice.getlogin($scope.uname,$scope.pass).then(function(res){
			$scope.loadingmessage='';
			console.log(res);
			if(res.id_token){
				sessionService.setSess('user',res.id_token);//minerva user logged in
				$location.path('/main');
			}else{
				$scope.errorMessage="Authentication Failed";
			}
		});		
	}
  });
