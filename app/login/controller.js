(function(){
	'use strict';

	var login_controller = function($scope) {
		var controller = this;
		controller.test_function = function() {
			console.log("test function");
		};
		controller.name = "NG WRITER";
	};

	angular.module('ngWriter.login').controller(
		'LoginController', 
		[
			'$scope',
			login_controller
		]
	);
}());

