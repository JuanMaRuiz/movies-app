(function(){
  'use strict';
  angular
    .module('userModule')
    .controller('userController', userController);

    userController.$inject = ['userInfoService']

    function userController(userInfoService) {
      var vm = this;
      userInfoService.getUserName()
          .then(function (response) {
              vm.userName = response.data.name;
          }, function (error) {
              vm.status = 'Unable to load customer data: ' + error.message;
          });
    }
})();
