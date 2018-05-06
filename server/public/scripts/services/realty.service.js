app.service('RealtyService', ['$http', function ($http) {
    console.log('RealtyService is loaded');
    var self = this;

    // SECTION FOR HOME CONTROLLER STUFF
    self.newProperty = {
        city: '',
        cost: '',
        sqft: '',
        type: '',
        image_path: ''
    };
    self.listProperty = function () {
        console.log(self.newProperty);
        $http({
            method: 'POST',
            url: '/properties',
            data: self.newProperty
        }).then(function (response) {
            console.log(response);
            //reset values
            self.newProperty.city = '';
            self.newProperty.cost = '';
            self.newProperty.sqft = '';
            self.newProperty.type = '';
            self.newProperty.image_path = '';
        }).catch(function (error) {
            console.log(error);
        });
    };

    // SECTION FOR RENT

    self.rentProperties = {props: []};
    self.getRentProperties = function() {
        $http({
            method: 'GET', 
            url: '/properties',
            params: {
                type: 'rent'
            }
        }).then(function(response) {
            self.rentProperties.props = response.data.rows;
        }).catch(function(error) {
            console.log(error);
        });
    };
    self.getRentProperties();

    //SECTION FOR SALE

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

    // DELETE LISTING FOR RENT AND SALE
    self.deleteListing = function (prop) {
        $http({
            method: 'DELETE',
            url: '/properties',
            params: {
                prop: prop.id
            }
        }).then(function(response) {
            console.log(response);
            self.getRentProperties();
            self.getSaleProperties();
        }).catch(function(error) {
            console.log(error);
        });
    };
}]);