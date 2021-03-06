/**
 * Created by mani on 18/7/15.
 */

/**
 Register controller
 */

(function() {
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject= ['$location', '$scope', 'Authentication'];

    function RegisterController($location, $scope, Authentication){
        var vm = this;

        vm.register = register;

        activate();

        function activate() {
        // If the user is authenticated, they should not be here.
        if (Authentication.isAuthenticated()) {
            $location.url('/');
            }
        }
        function register(){
            Authentication.register(vm.email, vm.username, vm.password);
        }
    };
})();
