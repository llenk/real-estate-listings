console.log('javascript loaded');

var app = angular.module('realEstateApp', ['ngRoute']);

app.controller('saleController', ['$http', function($http) {
    var self = this;
    console.log('angular loaded');
}])