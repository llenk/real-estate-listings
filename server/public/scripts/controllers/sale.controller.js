app.controller('saleController', ['$http', 'RealtyService', function($http, RealtyService) {
    var self = this;

    self.properties = RealtyService.properties;
    self.deleteListing = RealtyService.deleteListing;
}]);