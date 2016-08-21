(function(){
  'use strict';
  angular
    .module('userModule')
    .constant("db", {
        "url": "http://localhost:3000/",
        "movies": "movies",
        "user": "profile"
    })
    .factory('userInfoService', userInfoService);

    userInfoService.$inject = ['$http', 'db']

    function userInfoService($http, db) {
      var userInfoFact = {}

      userInfoFact.getUserInfo = function() {
        return $http.get(db.url + db.user);
      }
      return userInfoFact;
    }
})();