(function() {
    'use strict';

    angular
        .module('redditApp')
        .factory('RedditFactory', factory);

    factory.$inject = ['RedditService'];

    /* @ngInject */
    function factory(RedditService) {

        var items = [],
            busy = false,
            after = '';

        var service = {
            items: items,
            inProgress: inProgress,
            nextPage: nextPage,
            sanitizeImageUri: sanitizeImageUri
        };

        return service;


        //////////////////////

       function nextPage() {
        // only one call at a time
        if (busy) {
            return;
        }

        busy = true;

        RedditService.nextPage(after)
            .then(function (data) {
                // match the response json structure
                var results = data.data.children;
                console.log(results);
                angular.forEach(results, function(item) {
                    // add on to existing items, rather than replace them
                    items.push(item.data);
                });
                // set after param to equal id of last item returned
                after = 't3_' + items[items.length - 1].id;
                busy = false;
            });
        }

        function sanitizeImageUri(imgUri) {
            var sanitizedUri;

            // if (!imgUri || imgUri === 'self' || imgUri === 'nsfw') {
            if ((/\.(gif|jpg|jpeg|bmp|png)$/i).test(imgUri)) {
                sanitizedUri = imgUri;
            }
            else {
                sanitizedUri = 'images/avatar.png';
            }

            return sanitizedUri;
        }


        function inProgress() {
            return busy;
        }















    }
})();