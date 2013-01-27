'use strict';

/* Controllers */

function navCtrl($scope, $location) {
	$scope.getClass = function(button){
		var path = $location.path();
		if(path.indexOf(button)===0){
			return 'active';
		} else {
			return '';
		}
	};
}

function MyCtrl1() {
}

function MyCtrl2() {
}
