app.controller('homeController', ['$http', function($http) {
    var self = this;
    self.newProperty = {
        city: '',
        cost: '',
        sqft: '',
        type: '',
        image_path: ''
    };

    self.listProperty = function() {
        console.log(self.newProperty);
        $http({
            method: 'POST',
            url: '/properties',
            data: self.newProperty
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });

        //reset values
        self.newProperty = {
            city: '',
            cost: '',
            sqft: '',
            type: '',
            image_path: ''
        };
    };
}]);