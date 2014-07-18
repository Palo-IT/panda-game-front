'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pandaGameFrontApp
 */
app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}]);
