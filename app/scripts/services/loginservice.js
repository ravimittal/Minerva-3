'use strict';

/**
 * @ngdoc service
 * @name minervaApp.loginservice
 * @description
 * # loginservice
 * Factory in the minervaApp.
 */
angular.module('minervaApp').factory('loginservice', function($http,$location,$rootScope,sessionService){
	return {
		isloggedin : function(){
			var $checkSessionServer=$http.post($rootScope.httpServices+"login/isloggedIn");
			/*if(sessionService.getSess('muli')) return true;*/
			return $checkSessionServer;
		},
		logout : function(){
			sessionService.destroySess('uid');
			$location.path('/login');
		},
		getlogin : function(uname,pass){
			$http.defaults.headers.post["Content-Type"] = "text/plain";
			var data={'uname':uname,'pass':pass}
			return $http({
					method: "Post",
					data:data,
					url: $rootScope.httpServices+"login/checklogin",
					header:{'Content-Type':'application/x-www-form-urlencoded'}
				}).then(function mySucces(response) {
					return response.data;
				}, 
				function myError(response) {
					return 0;
			});
		}
	}
}); 
