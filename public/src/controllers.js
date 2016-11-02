angular.module('SenderEngine')
    .controller('HomeController', function($scope, Home, $rootScope, $location) {
        $rootScope.PAGE = "home";
        // $scope.alert = function () {
        //         alert('hi');
        //     };
        $scope.user = Home.get();
        $scope.go = function ( path ) {
            $location.path( path );
        };
    })

    .controller('ErgoController', function ($scope, $rootScope, $location) {
        console.log("o ErgoController xekinhse");
        $rootScope.PAGE= "engine";
        $scope.alert = function () {
           alert('hi');
        };
    })
;
