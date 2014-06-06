'use strict';

/**
 * @ngdoc overview
 * @name pandaGameFrontApp
 * @description
 * # pandaGameFrontApp
 *
 * Main module of the application.
 */
angular
  .module('pandaGameFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'HomeCtrl'
        })
        .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        })
        .when('/scores', {
            templateUrl: 'views/score.html',
            controller: 'ScoreCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
