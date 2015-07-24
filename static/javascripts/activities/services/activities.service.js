/**
 * Created by mani on 24/7/15.
 */

(function(){
    'use strict';

    angular
        .module('thinkster.activities.services')
        .factory('Activities', Activities);

    Activities.$inject = ['$http'];

    function Activities($http){
        var Activities = {
            all: all,
            create: create,
            get: get
        };
        return Activities;

        function all(){
            return $http.get('/api/v1/activities/');
        }

        function create(){
            return $http.post('/api/v1/activities/',{
                content: content
            });
        }

        function get(username){
            return $http.get('/api/v1/accounts/' + username + '/activities/');
        }
    }

})();