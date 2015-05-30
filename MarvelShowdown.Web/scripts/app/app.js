'use strict';

/**
 * @ngdoc overview
 * @name marvelShowdownApp
 * @description
 * # marvelShowdownApp
 *
 * Main module of the application.
 */

(function app_iife() {


angular
  .module('marvelShowdownApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when("/character/:id", {
        templateUrl: "views/character.html",
        controller: "CharacterController"
      })
      .when("/comic/:id", {
          templateUrl: "views/comic.html",
          controller: "ComicController"
      })
      .otherwise({
        redirectTo: '/search'
      });
  });


}());