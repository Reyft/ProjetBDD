'use strict';

/**
 * @ngdoc overview
 * @name projetBddApp
 * @description
 * # projetBddApp
 *
 * Main module of the application.
 */
angular
  .module('projetBddApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config("&routeProvider",[function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
