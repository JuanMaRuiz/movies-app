(function (){
  'use strict';
  angular
    .module('moviesModule')
    .controller('moviesListController', moviesListController);

    moviesListController.$inject = ['moviesService', '$scope'];

    function moviesListController (moviesService) {
      var vm = this;
      vm.movies = {};
      moviesService.getMovies()
        .then(function (response) {
          vm.movies = response;
        }), function (error) {
          vm.status = 'Unable to load customer data: ' + error.message;
        }
    }
})();