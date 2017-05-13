(function(){
	'use strict';

	var login_controller = function($scope, $state, httpRequester) {
		var controller = this;
		controller.appName = "NG WRITER";

		controller.user = {};

		controller.handleLoginBtnClick = function() {
			if (
				controller.user.email == undefined || 
				controller.user.password === undefined
			) {
				alert(111);
			}

			if (controller.user.email == 'admin' ||
				controller.user.password == 'admin') 
			{
				$state.go('app.editor');
				console.log(controller.user);
			} else {
				alert('wrong user or password');
				return;
			}
	      
	    };

	};

	angular.module('ngWriter.login').controller(
		'loginController', 
		[
			'$scope',
			'$state',
			'httpRequester',
			login_controller
		]
	);
}());

