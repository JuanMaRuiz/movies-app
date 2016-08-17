(function(){
  'use strict';
  angular
    .module('userModule')
    .controller('userController', userController);

    function userController() {
      console.log('User controller');
    }
})();
