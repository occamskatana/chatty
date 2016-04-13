(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			})

		$stateProvider
			.state('chat', {
				url: '/',
				controller: 'RoomsCtrl',
				templateUrl: 'templates/chat.html'
			});
	}

	angular
		.module('chatty', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();