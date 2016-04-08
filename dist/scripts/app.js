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
				templateUrl: 'templates/chat.html'
			});
	}

	angular
		.module('chatty', ['ui.router', 'firebase'])
		.config(config);
})();