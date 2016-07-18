(function(){
	angular 
		.module('chatty')
		.controller('RoomsCtrl', RoomsCtrl)

	function RoomsCtrl($scope, $firebaseArray, $cookies){

		$scope.verified;
		function checkForCookies(){
			var currentUser = $cookies['blocChatCurrentUser'];
			if(!currentUser || currentUser === ''){
				$scope.verified = false;
			} else {
				$scope.verified = true;
			}
		};

		checkForCookies();

		$scope.userName = {}

		$scope.user = $cookies['blocChatCurrentUser']
		
		$scope.setUserName = function(){
			$cookies['blocChatCurrentUser'] = $scope.userName.name;
			checkForCookies();
			console.log($cookies['blocChatCurrentUser'])
		}

		$scope.rooms = $firebaseArray(new Firebase("https://chattybloc.firebaseio.com/rooms"));
		console.log($scope.rooms)

		$scope.newRoom = {};

		$scope.addRoom = function(){
			$scope.rooms.$add({name: $scope.newRoom.name})
			$scope.newRoom.name = '';
		}

		$scope.messages;
		$scope.roomName = "Pick a Room"

		$scope.changeRoom = function(id, room){
			var ref = new Firebase('https://chattybloc.firebaseio.com/rooms/' + id)
			$scope.messages = $firebaseArray(ref);
			$scope.roomName = "Pick a Room"
			$scope.roomName = room.name;
		}

		$scope.message
		$scope.sendMessage = function(){
			$scope.messages.$add({text: $scope.message, username: $cookies['blocChatCurrentUser']});
			$scope.message = '';
		}
		
	}

})();