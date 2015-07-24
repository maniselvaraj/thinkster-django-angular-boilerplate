/**
 * Created by mani on 24/7/15.
 */


(function(){
    'use strict';

    angular
        .module('thinkster.activities.directives')
        .directive('activities', activities);


    function activities(){
        var directive = {
            controller: 'ActivitiesController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                activities: '='
            },
            templateUrl: '/static/templates/activities/activities.html'
        };
        return directive;
    }
})();