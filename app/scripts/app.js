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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
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
  app.run(function($rootScope,$location) {
	  $rootScope.httpServices=$location.protocol() + "://" + $location.host()+'/minerva-3/api/index.php/';
  });
