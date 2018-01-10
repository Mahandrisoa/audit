angular.module('app', [
    'ngMessages',
    'ngRoute',
])

    .controller('appCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
        var today = new Date();
        today.setDate(5);
        var day = today.getDate();
        if ((today.getDate() - 10) < 0) {
            day = '0' + day;
        };
        var nextFormat = day + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        $scope.dateAudit = nextFormat;
        $http.get('/api/audits?date=' + nextFormat).then(function (response) {
            $scope.audits = response.data;
            response.data.forEach(element => {
                var cache = parseFloat(element.CACHE_HIT_RATIO).toFixed(3);
                element.CACHE_HIT_RATIO = cache;
            });            
        });


    }]);
;