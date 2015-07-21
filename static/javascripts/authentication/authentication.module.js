/**
 * Created by mani on 19/7/15.
 */

/*
define all modules

 */

(function(){
    'use strict';

    angular
        .module('thinkster.authentication', [
            'thinkster.authentication.controllers',
            'thinkster.authentication.services'
        ]);

    angular
        .module('thinkster.authentication.controllers', []);

    angular
        .module('thinkster.authentication.services', [
            'ngCookies'
        ]);
})();