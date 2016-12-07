 var app = angular.module('app', []);
 app.controller('catalogCtrl', function($scope, $http) {
     $scope.catalog = 'some string';
     $http.get('json/catalog.json').success(function(response) {

         $scope.catalog = response;
     });

 })
