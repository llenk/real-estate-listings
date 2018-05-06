app.controller('homeController', ['$http', 'RealtyService', function($http, RealtyService) {
    var self = this;
    self.newProperty = RealtyService.newProperty;

    self.listProperty = RealtyService.listProperty;
}]);