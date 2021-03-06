'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the pandaGameFrontApp
 */
app.controller('UserCtrl', ['$scope', '$routeParams', '$http', function ($scope, routeParams, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.list = function() {
        $http.get('http://dev.panda-game.fr/api/users?limit=50').success(function(data) {
            $scope.users = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };

    $scope.read = function() {
        $http.get('http://dev.panda-game.fr/api/users/' + routeParams.usernameCanonical).success(function(data) {
            $scope.user = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });

        $http.get('http://dev.panda-game.fr/api/users/' + routeParams.usernameCanonical + '/scores').success(function(data) {
            $scope.scores = data;
            $scope.displayUser = false;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };
}]);