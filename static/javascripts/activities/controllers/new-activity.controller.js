/**
 * Created by mani on 24/7/15.
 */
(function () {
    'use strict';

    angular
        .module('thinkster.activities.controllers')
        .controller('NewActivityController', NewActivityController);

    NewActivityController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Activities'];

    /**
     * @namespace NewActivityController
     */
    function NewActivityController($rootScope, $scope, Authentication, Snackbar, Activities) {
        var vm = this;

        vm.submit = submit;

        function submit() {
            $rootScope.$broadcast('activity.created', {
                content: vm.content,
                author: {
                    username: Authentication.getAuthenticatedAccount().username
                }
            });

            $scope.closeThisDialog();

            Activities.create(vm.content).then(createPostSuccessFn, createPostErrorFn);


            function createPostSuccessFn(data, status, headers, config) {
                Snackbar.show('Success! Activity created.');
            }


            function createPostErrorFn(data, status, headers, config) {
                $rootScope.$broadcast('activity.created.error');
                Snackbar.error(data.error);
            }
        }
    }
})();
