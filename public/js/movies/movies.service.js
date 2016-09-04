(function(){
  'use strict';
  angular
    .module('moviesModule')
    .constant("db", {
        "url": "http://localhost:3000/",
        "movies": "movies"
    })
    .factory('moviesService', moviesService);

    moviesService.$inject = ['$http', 'db']

    function moviesService ($http, db) {
      var moviesService = {};

      moviesService.getMovies = function () {
        return $http.get(db.url + db.movies);
      };

      return moviesService;
    }
})();
