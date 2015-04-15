'use strict';

/**
 * @ngdoc function
 * @name projetBddApp.controller:GetCtrl
 * @description
 * # GetCtrl
 */
angular.module('projetBddApp')
  .controller('GetCtrl', ["$scope", "User", function ($scope, User) {
  	User.all(function(users){
  		$scope.error = users
  	})
  }]);