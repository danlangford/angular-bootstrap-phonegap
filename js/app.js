'use strict';

/* NG */
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).

	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/phonegap', {templateUrl:'partials/phonegap.html', controller:MyCtrl1});
		$routeProvider.when('/bootstrap', {templateUrl:'partials/bootstrap.html', controller:MyCtrl2});
		$routeProvider.otherwise({redirectTo:'/phonegap'});
	}]).

	run(function ($rootScope, $location) {

		/* PG */
		$rootScope.deviceready = false;
		document.addEventListener('deviceready', function () {
			console.log("Report: deviceready");
			$rootScope.deviceready = true;
		}, false);
		/* /PG */

	});




