/**
 * Created by mani on 27/7/15.
 */
(function () {
    'use strict';

    angular
        .module('thinkster.profiles.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', 'Activities', 'Profile', 'Snackbar'];

    /**
     * @namespace ProfileController
     */
    function ProfileController($location, $routeParams, Activities, Profile, Snackbar) {
        var vm = this;

        vm.profile = undefined;
        vm.activities = [];

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf thinkster.profiles.controllers.ProfileController
         */
        function activate() {
            var username = $routeParams.username.substr(1);

            Profile.get(username).then(profileSuccessFn, profileErrorFn);
            Activities.get(username).then(postsSuccessFn, postsErrorFn);

            /**
             * @name profileSuccessProfile
             * @desc Update `profile` on viewmodel
             */
            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }


            /**
             * @name profileErrorFn
             * @desc Redirect to index and show error Snackbar
             */
            function profileErrorFn(data, status, headers, config) {
                $location.url('/');
                Snackbar.error('That user does not exist.');
            }


            /**
             * @name postsSucessFn
             * @desc Update `posts` on viewmodel
             */
            function postsSuccessFn(data, status, headers, config) {
                vm.activities = data.data;
            }


            /**
             * @name postsErrorFn
             * @desc Show error snackbar
             */
            function postsErrorFn(data, status, headers, config) {
                Snackbar.error(data.data.error);
            }
        }
    }
})();