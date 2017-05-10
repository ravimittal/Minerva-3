'use strict';

/**
 * @ngdoc service
 * @name minervaApp.sessionService
 * @description
 * # sessionService
 * Factory in the minervaApp.
 */
angular.module('minervaApp').factory('sessionService', function($http,$cookies,$cookieStore){
		return {
			setSess : function(key,value){
				return $cookies.put(key,value);
			},
			getSess : function(key){
				return $cookies.get(key);
			},
			destroySess : function(key){
				$http.post($rootScope.httpServices+"login/logout");
				return $cookies.remove(key);
			}
		}
}); 
