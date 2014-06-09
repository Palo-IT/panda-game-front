'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:ScoreCtrl
 * @description
 * # ScoreCtrl
 * Controller of the pandaGameFrontApp
 */
app.controller('ScoreCtrl', ['$scope', '$http',  function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.list = function() {
        $http.get('http://dev.panda-game.fr/api/scores').success(function(data) {
            $scope.scores = data;
        }).error(function(data, status, headers) {
            console.log(status);
            console.log(headers);
        });
    };
}]);
