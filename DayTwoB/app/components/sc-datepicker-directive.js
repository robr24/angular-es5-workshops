(function() {
    'use strict';

    angular
        .module('redditApp')
        .directive('scDatePicker', directive);

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
            restrict: 'A',
            scope: {
                ngModel: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            console.log(element);


            element.datepicker();

            element.on('change', function() {
                console.log('CHANGE');
                scope.$apply(function() {
                    scope.ngModel = element.val();
                });
            })

            scope.$watch('ngModel', function(newVal, oldVal) {
                console.log('new value: ', newVal);
            });
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();