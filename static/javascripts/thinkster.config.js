/**
 * Created by mani on 19/7/15.
 */


(function(){
    'use strict';

    angular
        .module('thinkster.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    /*
    enable html5 routing
    */

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    };

})();