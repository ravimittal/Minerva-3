'use strict';

/**
 * @ngdoc overview
 * @name minervaApp
 * @description
 * # minervaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('minervaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMaterialSidemenu'
  ]);
  app.config(function ($routeProvider,$locationProvider) {
    $routeProvider
	  .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/roles', {
        templateUrl: 'views/settings/roles.html',
        controller: 'SettingsRolesCtrl',
        controllerAs: 'roles'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
  app.run(function($rootScope,$location,loginservice) {
	  $rootScope.httpServices=$location.protocol() + "://" + $location.host()+'/minerva-3/api/index.php/';
	  var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
	  if (restrictedPage) {// do not allow any other page than login if not logged in
		  var connected=loginservice.isloggedin();
		  connected.then(function(msg){
			  if(!msg.data) $location.path('/login');
		  });		 
	  }else if(!restrictedPage){// do not allow login page if logged in
		  var connected=loginservice.isloggedin();
		  connected.then(function(msg){
			  if(msg.data) $location.path('/main');
		  });
	  }
  });
