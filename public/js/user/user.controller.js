(function(){
  'use strict';
  angular
    .module('userModule')
    .controller('userController', userController);

    userController.$inject = ['userInfoService']

    function userController(userInfoService) {
      var vm = this;
      userInfoService.getUserInfo()
          .then(function (response) {
              vm.userName = response.data.name;
              vm.userAvatar = response.data.avatar;
              vm.userDescription = response.data.description;
          }, function (error) {
              vm.status = 'Unable to load customer data: ' + error.message;
          });
    }
})();
