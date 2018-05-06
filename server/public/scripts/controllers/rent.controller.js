app.controller('rentController', ['$http', function($http) {
    var self = this;

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
        }).catch(function(error) {
            console.log(error);
        });
    };
    self.getRentProperties();
}]);