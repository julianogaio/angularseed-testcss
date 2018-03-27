'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'ngMaterial',
  'chart.js',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.version'
])
.directive('myMenu', function(){
	return {
		templateUrl: 'menu.html'
	}
})
.directive('myFooter', function(){
	return {
		templateUrl: 'footer.html'
	}
})
.directive('myHeaderLogged', function(){
	return {
		templateUrl: 'header.html'
	}
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {	

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
