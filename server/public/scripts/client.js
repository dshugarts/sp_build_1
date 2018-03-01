const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController as hc'
    }).when('/dash', {
      templateUrl: 'views/user-dash.html',
      controller: 'DashController as dc'
    }).when('/form', {
        templateUrl: 'views/user-form.html',
        controller: 'FormController as fc'
    }).otherwise({ template: '<h1>404 Page Not Found</h1>' });
  
  });