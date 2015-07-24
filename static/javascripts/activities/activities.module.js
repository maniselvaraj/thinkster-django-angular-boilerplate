/**
 * Created by mani on 24/7/15.
 */


(function(){
    'use strict';

    angular
        .module('thinkster.activities', [
            'thinkster.activities.controllers',
            'thinkster.activities.directives',
            'thinkster.activities.services'
        ]);

    angular
        .module('thinkster.activities.controllers', []);

    angular
        .module('thinkster.activities.directives', ['ngDialog']);

    angular
        .module('thinkster.activities.services', []);
})();