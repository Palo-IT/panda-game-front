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

    $scope.getSponsors = function(limit, offset) {
        var defaultLimit = 3;
        var defaultOffset = 0;

        if (!limit)
            limit = defaultLimit;

        if (!offset)
            offset = defaultOffset;

        alert('http://dev.panda-game.fr/api/sponsors?limit=' + limit + '&offset=' + offset);

        $http.get('http://dev.panda-game.fr/api/sponsors?limit=' + limit + '&offset=' + offset).success(function(data) {
            $scope.$apply( function () {
                $scope.sponsors = data;
                $scope.currentLimit = limit;
                $scope.currentOffset = offset;
            });

        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };
}]);