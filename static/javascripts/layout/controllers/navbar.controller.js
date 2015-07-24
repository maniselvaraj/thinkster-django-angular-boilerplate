/**
 * Created by mani on 24/7/15.
 */


(function(){
    'use strict';

    angular
        .module('thinkster.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];

    function NavbarController($scope, Authentication){
        var vm = this;

        vm.logout = logout;

        function logout(){
            Authentication.logout();
        }
    }
})();


