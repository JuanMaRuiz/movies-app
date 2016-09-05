(function(){
  'use strict';
  angular
    .module('moviesModule')
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
