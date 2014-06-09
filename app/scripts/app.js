'use strict';

/**
 * @ngdoc overview
 * @name pandaGameFrontApp
 * @description
 * # pandaGameFrontApp
 *
 * Main module of the application.
 */
var app = angular.module('pandaGameFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/users', {
            templateUrl: 'views/user/list.html',
            controller: 'UserCtrl'
        })
        .when('/users/:usernameCanonical', {
            templateUrl: 'views/user/read.html',
            controller: 'UserCtrl'
        })
        .when('/scores', {
            templateUrl: 'views/score/list.html',
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

