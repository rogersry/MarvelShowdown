'use strict';

/**
 * @ngdoc function
 * @name marvelShowdownApp.controller:CharacterController
 * @description
 * # CharacterController
 * Controller of the marvelShowdownApp
 */


(function(){
  
  var app = angular.module("marvelShowdownApp");
  
  app.controller("CharacterController", ["$scope", "marvelApi", "$routeParams",
    function($scope, marvelApi, $routeParams)
    {
      
      var onCharacterComplete = function(data)
      {
        $scope.character = data.data.results[0];
      };
      
      var onComicsComplete = function(data){
        if($scope.loading)
        {
          $scope.comics = data.data.results;
          $scope.loading = false;
        }
      }
      
      var onError = function(reason)
      {
        $scope.error = reason;
      };
      
      $scope.id = $routeParams.id;
      $scope.loading = true;
      marvelApi.getCharacter($scope.id).then(onCharacterComplete, onError);
      marvelApi.getComics($scope.id).then(onComicsComplete, onError);
    }
  ]);
  
}());