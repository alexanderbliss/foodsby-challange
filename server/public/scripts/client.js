var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'MenuController as mc',
    })
    .when('/monday', {
      templateUrl: '/views/templates/monday.html',
      controller: 'MenuController as mc',
    })
    .when('/tuesday', {
      templateUrl: '/views/templates/tuesday.html',
      controller: 'MenuController as mc',
    })
    .when('/wednesday', {
      templateUrl: '/views/templates/wednesday.html',
      controller: 'MenuController as mc',
    })
    .when('/thursday', {
      templateUrl: '/views/templates/thursday.html',
      controller: 'MenuController as mc',
    })
    .when('/friday', {
      templateUrl: '/views/templates/friday.html',
      controller: 'MenuController as mc',
    })
    .otherwise({
      redirectTo: 'home'
    });
});