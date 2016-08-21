(function(){
  'use strict';
  angular
    .module('userModule')
    .constant("db", {
        "url": "http://localhost:3000/",
        "movies": "movies",
        "user": "profile"
    })
    .factory('userInfoService', userInfo);

    userInfo.$inject = ['$http', 'db']

    function userInfo($http, db) {
      var userInfoFact = {}

      userInfoFact.getUserName = function() {
        return $http.get(db.url + db.user);
      }
      return userInfoFact;
    }
})();