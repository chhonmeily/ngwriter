'use strict';

// Declare app level module which depends on views, and components
angular.module('ngWriter', [
  'ngRoute',
  'ngWriter.login',
  'ngWriter.view2',
  'ngWriter.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
