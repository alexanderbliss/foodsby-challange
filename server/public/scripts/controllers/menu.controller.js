myApp.controller('MenuController', function ($http, $location, MenuService) {
    console.log('menu controller created');
    let vm = this;
    let mondayItems = []
    let tuesdayItems =[]
    let wednesdayItems =[]
    let thursdayItems =[]
    let fridayItems =[]
    vm.mondayItems = MenuService.mondayItems
    vm.tuesdayItems = MenuService.tuesdayItems
    vm.wednesdayItems = MenuService.wednesdayItems
    vm.thursdayItems = MenuService.thursdayItems
    vm.fridayMenu = MenuService.fridayMenu


    vm.mondayMenu = function () {
        MenuService.mondayMenu()
        console.log('getting monday menu');
        
    }
    vm.tuesdayMenu = function () {
        MenuService.tuesdayMenu()
        console.log('getting tuesday menu');

    }
    vm.wednesdayMenu = function () {
        MenuService.wednesdayMenu()
        console.log('getting wednesday menu');

    }
    vm.thursdayMenu = function () {
        MenuService.thursdayMenu()
        console.log('getting thursday menu');

    }
    vm.fridayMenu = function () {
        MenuService.fridayMenu()
        console.log('getting friday menu');

    }
});
