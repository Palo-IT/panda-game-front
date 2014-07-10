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

    $scope.index = function() {
        $http.get('http://dev.panda-game.fr/api/sponsors').success(function(data) {
            $scope.sponsors = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };
}]);
