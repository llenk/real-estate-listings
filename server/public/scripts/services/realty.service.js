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

    // SECTION FOR RENT+SALE

    self.properties = {
        rent: [], 
        sale: [],
        cheapestrent: {}, //I'm sure there's a solution that lets me do camel case
        cheapestsale: {} //But I did not look
    };
    self.types = ['rent', 'sale'];
    
    self.getProperties = function() {
        self.types.forEach(function(element) {
            $http({
                method: 'GET', 
                url: '/properties',
                params: {
                    type: element
                }
            }).then(function(response) {
                self.properties[element] = response.data.rows;
                self.cheapestProperty(self.properties[element], element);
            }).catch(function(error) {
                console.log(error);
            });
        });
    };

    self.cheapestProperty = function(props, type) {
        self.properties['cheapest' + type] = props[0];
        for (let i=1; i<props.length; i++) {
            if (self.properties['cheapest' + type].cost > props[i].cost) {
                self.properties['cheapest' + type] = props[i];
            }
        }
    }

    self.deleteListing = function (prop) {
        $http({
            method: 'DELETE',
            url: '/properties',
            params: {
                prop: prop.id
            }
        }).then(function(response) {
            console.log(response);
            self.getProperties();
        }).catch(function(error) {
            console.log(error);
        });
    };
    self.getProperties();
}]);