'use strict';

/**
 * @ngdoc function
 * @name marvelShowdownApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the marvelShowdownApp
 */
angular.module('marvelShowdownApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
