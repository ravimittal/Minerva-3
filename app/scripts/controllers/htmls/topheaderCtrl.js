'use strict';

/**
 * @ngdoc function
 * @name m3App.controller:topheaderCtrl
 * @description
 * # LoginCtrl
 * Controller of the m3App
 */
angular.module('minervaApp')
  .controller('topheaderCtrl', function ($scope,loginservice,$location,sessionService) {
    $scope.logout=function(){
		loginservice.logout();	
	}
  });
