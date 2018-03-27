'use strict';

angular.module('myApp.view4', ['ngRoute', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View4Ctrl', [function() {


}]);