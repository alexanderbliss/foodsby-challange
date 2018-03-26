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
            self.monday = response
            console.log(self.monday);
        })
    }

    self.tuesdayMenu = function (user) {
        console.log('click');
        $http.get('/items/tuesday').then(function (response) {
            self.tuesday = response
            console.log(self.tuesday);
        })
    }
    self.wednesdayMenu = function (user) {
        console.log('click');
        $http.get('/items/wednesday').then(function (response) {
            self.wednesday = response
            console.log(self.wednesday);
        })
    }
    self.thursdayMenu = function (user) {
        console.log('click');
        $http.get('/items/thursday').then(function (response) {
            self.thursday = response
            console.log(self.thursday);
        })
    }
    self.fridayMenu = function (user) {
        console.log('click');
        $http.get('/items/friday').then(function (response) {
            self.friday = response
            console.log(self.friday);
        })
    }



    
    
}); // end of service
