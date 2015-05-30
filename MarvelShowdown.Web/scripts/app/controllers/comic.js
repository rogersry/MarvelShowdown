'use strict';

/**
 * @ngdoc function
 * @name marvelShowdownApp.controller:ComicController
 * @description
 * # ComicController
 * Controller of the marvelShowdownApp
 */

(function() {

    var app = angular.module("marvelShowdownApp");

    app.controller("ComicController", ["$scope", "marvelApi", "$routeParams",
        function ($scope, marvelApi, $routeParams)
        {
            var onComicComplete = function (data) {
                if($scope.loading)
                {
                    $scope.comic = data.data.results[0];
                    $scope.loading = false;
                }
            };

            var onError = function (reason) {
                $scope.error = reason;
            };

            $scope.id = $routeParams.id;
            $scope.loading = true;
            marvelApi.getComic($scope.id).then(onComicComplete, onError);

        }]);

}());