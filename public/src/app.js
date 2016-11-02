
angular.module('SenderEngine', ['ngRoute', 'ngResource', 'angular-loading-bar'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        /* Project Home Page */
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })

            .when('/erga', {
                controller: 'ErgoController',
                templateUrl: 'views/erga.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode(true);

    });
