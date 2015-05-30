'use strict';

/**
 * @ngdoc function
 * @name marvelShowdownApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the marvelShowdownApp
 */

(function(){
	
	var app = angular.module("marvelShowdownApp");
	
	app.controller("HeaderController", ["$scope", "$location", 
		function($scope, $location){
			$scope.isActive = function(viewLocation)
			{
				return $location.path().indexOf(viewLocation) > -1;
			};
		}]);
	
}());