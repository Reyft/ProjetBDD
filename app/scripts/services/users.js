'use strict';

/**
 * @ngdoc function
 * @name projetBddApp.controller:UsersFact
 * @description
 * # UsersFact
 */
angular.module('projetBddApp')
  .factory('User', ["$http", function ($http) {  // On appel 'User' dans le controlleur
  	var obj = {
  		get : function(userID){
  			//TO DO
  		},
  		delete : function(userID){
  			//TO DO
  		},
  		all : function(successCB, failCB){
  			$htpp.get("url")
  			.success(function(result){
  				if (result.status == "success"){
  					var users = result.data;
  					successCB(users);
  				}
  			})
  			.error(function(error){
  				failCB(error);
  			})
  		}
  	}
  	return obj;
    }]);