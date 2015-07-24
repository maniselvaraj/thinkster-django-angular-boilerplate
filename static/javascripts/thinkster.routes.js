/**
 * Created by mani on 18/7/15.
 */


(function(){

    angular
        .module('thinkster.routes')
        .config(config);

    config.$inject = ['$routeProvider'];


    function config($routeProvider){
        $routeProvider.when('/register',{
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).otherwise('/')
    };
})();