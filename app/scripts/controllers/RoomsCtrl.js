(function(){
	function RoomsCtrl(Room, $scope){
		$scope.rooms = Room.all

		$scope.newRoom;

		$scope.addRoom = function(newRoom){
			Room.create(newRoom);
			$scope.newRoom = null;
		}
	}

	angular
		.module('chatty')
		.controller('RoomsCtrl', ['Room', '$scope', RoomsCtrl])
})();