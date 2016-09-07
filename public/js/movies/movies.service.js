(function(){
  'use strict';
  angular
    .module('moviesModule')
    .factory('moviesService', moviesService);

    moviesService.$inject = ['$http', 'db']

    function moviesService ($http, db) {
      var moviesService = {};

      moviesService.getMovies = function () {
        return $http({
          method: 'GET',
          url: db.url + db.movies
        }).then(function(response) {
          return response.data;
        })
      };

      return moviesService;
    }
})();