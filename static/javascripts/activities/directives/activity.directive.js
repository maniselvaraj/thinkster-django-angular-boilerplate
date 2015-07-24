/**
 * Created by mani on 24/7/15.
 */
(function () {
  'use strict';

  angular
    .module('thinkster.activities.directives')
    .directive('activity', activity);

  /**
  * @namespace Activity
  */
  function activity() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.posts.directives.Post
    */
    var directive = {
      restrict: 'E',
      scope: {
        activity: '='
      },
      templateUrl: '/static/templates/activities/activity.html'
    };

    return directive;
  }
})();