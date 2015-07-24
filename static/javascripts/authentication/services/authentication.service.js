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
            register : register
        };
        return Authentication; //the return the module

        function register(email, username, password ){
            return $http.post('/api/v1/accounts/',{
                username: username,
                password: password,
                email: email
            });
        };
    };
})();  //What is this syntax?