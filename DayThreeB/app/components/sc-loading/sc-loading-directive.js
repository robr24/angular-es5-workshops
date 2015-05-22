(function() {
    'use strict';

    angular
        .module('redditApp')
        .directive('scLoading', directive);

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
            templateUrl: 'app/components/sc-loading/sc-loading.html',
            scope: {
                busy: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {



        }
    }

    /* @ngInject */
    function Controller () {

    }
})();