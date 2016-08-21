(function(){
  'use strict';
  angular
    .module('moviesApp', ['ui.router', 'userModule'])
    .config(configuration)

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login.html'
        })
        .state('list', {
          url: '/list',
          templateUrl: 'partials/movie-list.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'partials/profile.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        });
      $urlRouterProvider.otherwise('/login');
    }
})();
