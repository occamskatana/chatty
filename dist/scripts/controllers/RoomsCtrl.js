(function(){
	function RoomsCtrl($scope, $firebaseObject, Room){

		var ref = new Firebase("https://boiling-torch-5645.firebaseio.com/");


		$scope.rooms = Room.all

		console.log($scope.rooms)

		
	}

	angular 
		.module('chatty')
		.controller('RoomsCtrl', ['$scope', '$firebaseObject', 'Room', RoomsCtrl])
})();