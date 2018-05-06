app.controller('saleController', ['$http', function($http) {
    var self = this;

    self.saleProperties = {props: []};
    self.getSaleProperties = function() {
        $http({
            method: 'GET', 
            url: '/properties',
            params: {
                type: 'sale'
            }
        }).then(function(response) {
            self.saleProperties.props = response.data.rows;
        }).catch(function(error) {
            console.log(error);
        });
    };
    self.deleteListing = function (prop) {
        $http({
            method: 'DELETE',
            url: '/properties',
            params: {
                prop: prop.id
            }
        }).then(function(response) {
            console.log(response);
            self.getSaleProperties();
        }).catch(function(error) {
            console.log(error);
        });
    };
    self.getSaleProperties();
}]);