'use strict';

/**
 * @ngdoc directive
 * @name minerva3App.directive:sidebarDirective
 * @description
 * # sidebarDirective
 */
angular.module('minerva3App')
  .directive('sidebarDirective', function () {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };
  });
