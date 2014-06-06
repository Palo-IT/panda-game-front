'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pandaGameFrontApp
 */
angular.module('pandaGameFrontApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
