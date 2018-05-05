var app = angular.module('realEstateApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/home.html', 
        controller: 'homeController as vm'
    }).when('/sale', {
        templateUrl: './views/sale.html',
        controller: 'saleController as vm'
    }).when('/rent', {
        templateUrl: './views/rent.html',
        controller: 'rentController as vm'
    }).otherwise({
        template: '<h2>404</h2>'
    });
});
