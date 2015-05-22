(function() {
    'use strict';

    angular
        .module('redditApp')
        .service('RedditService', Service);

    Service.$inject = ['$http', '$q'];

    /* @ngInject */
    function Service($http, $q) {

        this.nextPage = nextPage;

        ////////////////

        function nextPage(after) {
            var deferred = $q.defer(),
                // change the callback function and watch what happens
                url = 'http://api.reddit.com/hot?after=' + after;

            $http.get(url)
                .success(function (results) {
                    var data = results || [];
                    deferred.resolve(data);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


    }
})();