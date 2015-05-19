(function() {
    // 'use strict';

    angular
        .module('redditApp')
        .controller('RedditController', Controller);

    Controller.$inject = ['RedditService'];

    /* @ngInject */
    function Controller(RedditService) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            getData();
            // vm.reddit.nextPage();
        }

        // this will get piped into a factory,
        // but we can use it for testing for now
        function getData() {
            RedditService.nextPage()
                .then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log('error: ', error);
                });
        }
    }
})();