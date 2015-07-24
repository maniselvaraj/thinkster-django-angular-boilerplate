/**
 * Created by mani on 18/7/15.
 */

/* *
* Authentication
* @namespace thinkster.authentication.services
*/

(function(){

    'use strict';

    angular
        .module('thinkster.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];


    //this is the actual service that is returned
    //from this module
    function Authentication($cookies, $http){
        var Authentication = {
            login: login,
            register: register,
            isAuthenticated: isAuthenticated,
            setAuthenticatedAccount: setAuthenticatedAccount,
            getAuthenticatedAccount: getAuthenticatedAccount,
            unauthenticate: unauthenticate
        };
        return Authentication; //the return the module



        function loginSuccessFn(data, status, headers, config){
            Authentication.setAuthenticatedAccount(data.data);
            window.location = '/';
        };

        function loginErrorFn(data, status, headers, config){
          console.log('login failed');
            alert('login failed again');
        };

        function login(email, password){
            return $http.post('/api/v1/auth/login/',{
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);

        };

        function isAuthenticated(){
            return !!$cookies.authenticatedAccount;
        };

        function getAuthenticatedAccount(){
            if(!$cookies.authenticatedAccount){
                return;
            }
            return JSON.parse($cookies.authenticatedAccount);
        };

        function setAuthenticatedAccount(account){
            $cookies.authenticatedAccount = JSON.stringify(account);
        };

        function unauthenticate(){
            delete $cookies.authenticatedAccount;
        };

        function registerSuccessFn(data, status, headers, config){
            Authentication.login(email, password);
        }
        function registerErrorFn(data, status, headers, config){
            console.error('registration failed');
            alert('registration failed');
        }
        function register(email, username, password ){
            return $http.post('/api/v1/accounts/',{
                username: username,
                password: password,
                email: email
            }).then(registerSuccessFn, registerErrorFn);
        };
    };
})();  //What is this syntax?