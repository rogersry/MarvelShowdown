(function marvelAPI_iife(){
  
  var marvelApi = function($http)
  {
    
      var getCharacter = function (id) {

          return $http.get("http://gateway.marvel.com:80/v1/public/characters/" + id + "?apikey=<YOUR KEY HERE>")
            .then(function(response){
              return response.data;
            });
      };
    
      var searchCharacter = function (characterName) {

          return $http.get("http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=" + characterName + "&apikey=<YOUR KEY HERE>")
          .then(function(response){
              return response.data;
          });
      };
      
    var getComics = function(characterId) {
      return $http.get("http://gateway.marvel.com:80/v1/public/characters/" + characterId + "/comics?apikey=<YOUR KEY HERE>")
        .then(function(response){
          return response.data;
        });
    };

    var getComic = function (id) {
            
        return $http.get("http://gateway.marvel.com:80/v1/public/comics/" + id + "?apikey=<YOUR KEY HERE>")
          .then(function(response){
              return response.data;
          });
    };
    
    return {
      getCharacter: getCharacter,
      searchCharacter: searchCharacter,
      getComics: getComics,
      getComic: getComic
    };
    
  };
  
  
  var module = angular.module("marvelShowdownApp");
  
  module.factory("marvelApi", marvelApi);
  
}());