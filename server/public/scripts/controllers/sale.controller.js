app.controller('saleController', ['$http', 'RealtyService', function($http, RealtyService) {
    var self = this;

    self.saleProperties = RealtyService.saleProperties;
    self.getSaleProperties = RealtyService.getSaleProperties;
    self.deleteListing = RealtyService.deleteListing;
}]);