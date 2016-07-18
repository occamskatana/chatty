(function(){
 angular
		.module('chatty', ['ui.router', 'ngCookies', 'firebase'])
		.config(config)


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



})();