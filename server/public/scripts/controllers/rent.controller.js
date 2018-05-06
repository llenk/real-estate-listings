app.controller('rentController', ['$http', 'RealtyService', function($http, RealtyService) {
    var self = this;

    self.rentProperties = RealtyService.rentProperties;
    self.getRentProperties = RealtyService.getRentProperties;
    self.deleteListing = RealtyService.deleteListing;
}]);