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
    'ui.bootstrap',
    'truncate'
  ]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home/index.html',
            controller: 'HomeCtrl'
        })
        .when('/play', {
            templateUrl: 'views/play/index.html',
            controller: 'PlayCtrl'
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
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/sponsors', {
            templateUrl: 'views/sponsor/list.html',
            controller: 'SponsorCtrl'
        })
        .when('/sponsors/:slug', {
            templateUrl: 'views/sponsor/read.html',
            controller: 'SponsorCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });

