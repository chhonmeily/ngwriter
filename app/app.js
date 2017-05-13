'use strict';

// Declare app level module which depends on views, and components
angular.module('ngWriter', [
  'ui.router',
  'ngWriter.httpRequester',
  'ngWriter.login',
  'ngWriter.editor',
  'ngWriter.version'
]).
config([
	'$urlRouterProvider',
	'$stateProvider',
	function(
		$urlRouterProvider,
		$stateProvider
	) {
	  	$urlRouterProvider.otherwise('/');
	  	$stateProvider
	  	.state(
			'app',
			{
				url: '/app',
				template: '<div ui-view></div>'
			}
		)
	  	.state(
			'app.login',
			{
				url: '/login',
				templateUrl: 'login/login.html',
				controllerUrl: 'loginController'
			}
		)
		.state(
			'app.editor',
			{
				url: '/editor',
				templateUrl: 'editor/editor.html',
				controller: 'editorController'
			}
		);
	}
]);
