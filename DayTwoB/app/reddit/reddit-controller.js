(function() {
    // 'use strict';

    angular
        .module('redditApp')
        .controller('RedditController', Controller);

    Controller.$inject = ['RedditFactory'];

    /* @ngInject */
    function Controller(RedditFactory) {
        var vm = this;
        vm.dateModel = new Date();
        vm.reddit = RedditFactory;


        activate();

        ////////////////

        function activate() {
            // vm.reddit.nextPage();
        }

    }
})();