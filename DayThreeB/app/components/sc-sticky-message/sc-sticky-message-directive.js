(function() {
    'use strict';

    angular
        .module('redditApp')
        .directive('scStickyMessage', directive);

    // directive.$inject = ['dependencies'];

    /* @ngInject */
    function directive () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/components/sc-sticky-message/sc-sticky-message.html',
            scope: {
                cls: '@messageType',
                show: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            var $ = angular.element;

            element.on('click', function() {
                $(this).hide();
            });

            scope.$watch('vm.show', function(newVal, oldVal) {
                if (newVal && newVal !== oldVal) {
                    element.show();
                }
            });

        }
    }

    /* @ngInject */
    function Controller () {

    }
})();