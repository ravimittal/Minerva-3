'use strict';

/**
 * @ngdoc service
 * @name m3App.loginservice
 * @description
 * # loginservice
 * Factory in the m3App.
 */
angular.module('minervaApp').factory('loginservice', function($http){
		return {
			getlogin : getlogin
		}
		function getlogin(uname,pass) {
			$http.defaults.headers.post["Content-Type"] = "text/plain";
			var data={'uname':uname,'pass':pass}
			return $http({
					method: "Post",
					data:data,
					url: "http://localhost/VikaLogistics-master/api/index.php/login/checklogin",
					header:{'Content-Type':'application/x-www-form-urlencoded'}
				}).then(function mySucces(response) {
					return response.data;
				}, 
				function myError(response) {
							return 0;
			});
	}
}); 
