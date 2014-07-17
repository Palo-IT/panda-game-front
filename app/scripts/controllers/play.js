'use strict';

/**
 * @ngdoc function
 * @name pandaGameFrontApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the pandaGameFrontApp
 */

app.controller('PlayCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.saveScore = function() {
        var score = {result: 10};

        $http.post('http://dev.panda-game.fr/api/scores', score).success(function() {
            $scope.saveScore.status = "success";
            $scope.saveScore.message = "Congratulation for your score !";
        }).error(function(data, status, headers) {
            $scope.saveScore.status = "danger";
            $scope.saveScore.message = "An error as occur";

            console.log(status);
            console.log(headers);
        });
    };
}]);

