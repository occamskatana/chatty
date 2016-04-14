(function(){
	function RoomsCtrl(Room, $scope){
		$scope.rooms = Room.all

		$scope.newRoom;

		$scope.addRoom = function(newRoom){
			Room.create(newRoom);
			$scope.newRoom = null;
		}

		$scope.messages;

		$scope.goGetMessages = function(roomId){
			$scope.messages = Room.getMessages(roomId);
			
		}
		
	}

	angular
		.module('chatty')
		.controller('RoomsCtrl', ['Room', '$scope', RoomsCtrl])
})();