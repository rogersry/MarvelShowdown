'use strict';

/**
 * @ngdoc function
 * @name marvelShowdownApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the marvelShowdownApp
 */


(function() {

  var app = angular.module("marvelShowdownApp");

  app.controller("SearchController", ["$scope", "marvelApi", "$location",
    function($scope, marvelApi, $location) {
      
      
      var onSearchCharacterComplete = function(data) {
        if($scope.loading)
        {
          $scope.characters = data.data.results;
          $scope.loading = false;
        }
      };

      var onError = function(reason) {
        $scope.error = reason;
      };
      
      $scope.searchCharacter = function() {
        if($scope.characterName.length > 3)
        {
        $scope.loading = true;
        marvelApi.searchCharacter($scope.characterName)
          .then(onSearchCharacterComplete, onError);
        }
        else
        {
          onError("Search must be more than 3 characters.");
        }
      };

      $scope.selectCharacter = function (characterId) {
          $location.path("character/" + characterId);
      }

    }
  ]);

}());