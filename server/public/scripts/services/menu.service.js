myApp.service('MenuService', function ($http, $location) {
    let self = this

    self.monday = {}
    self.tuesday = {}
    self.wednesday = {}
    self.thursday = {}
    self.friday = {}
    self.order = {}

    self.mondayMenu = function (user) {
        console.log('click');
        $http.get('/items/monday').then(function (response) {
            avialable(response)

            self.monday = response
            console.log(self.monday);
        })
    }

    self.tuesdayMenu = function (user) {
        console.log('click');
        $http.get('/items/tuesday').then(function (response) {
            avialable(response)

            self.tuesday = response
            console.log(self.tuesday);
        })
    }
    self.wednesdayMenu = function (user) {
        console.log('click');
        $http.get('/items/wednesday').then(function (response) {
            avialable(response)

            self.wednesday = response
            console.log(self.wednesday);
        })
    }
    self.thursdayMenu = function (user) {
        console.log('click');
        $http.get('/items/thursday').then(function (response) {
                        avialable(response)

            self.thursday = response
            console.log(self.thursday);
        })
    }
    self.fridayMenu = function (user) {
        console.log('click');
        $http.get('/items/friday').then(function (response) {
            avialable(response)

            self.friday = response
            console.log(self.friday);
        })
    }


    function avialable(response) {
        if (response.isPastCutoff === true) {
            console.log('here');
            
            self.order.message = 'Past Cut Off time.'
            self.order.status = false
        }
        else if (response.soldOut === true) {
            console.log('here');

            self.order.message = 'All Sold Out.'
            self.order.status = false
        }
        else if (response.sellingOut === true) {
            console.log('here');

            self.order.message = 'Only A few Left.'
            self.order.status = true
        }
        else if (response.isOrderPlaced === true) {
            console.log('here');

            self.order.message = 'This order is on the way!.'
            self.order.status = false
        }

        console.log('message', self.order);
        
    }
    
    
    
}); // end of service
