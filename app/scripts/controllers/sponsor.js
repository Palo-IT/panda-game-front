'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:SponsorCtrl
 * @description
 * # SponsorCtrl
 * Controller of the pandaGameFrontApp
 */
app.controller('SponsorCtrl', ['$scope', '$routeParams', '$http', function ($scope, routeParams, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.list = function() {
        $http.get('http://dev.panda-game.fr/api/sponsors').success(function(data) {
            $scope.sponsors = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };

    $scope.read = function() {
        $http.get('http://dev.panda-game.fr/api/sponsors/' + routeParams.slug).success(function(data, status) {
            $scope.sponsor = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };
}]);