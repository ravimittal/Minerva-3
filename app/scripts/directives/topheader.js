'use strict';

/**
 * @ngdoc directive
 * @name minervaApp.directive:topHeader
 * @description
 * # topHeader
 */
angular.module('minervaApp')
  .directive('topHeader', function () {
    return {
        templateUrl : 'views/htmls/topheader.html'
    };
  });
