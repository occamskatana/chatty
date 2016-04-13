(function(){
	function Room($firebaseArray){
		var ref = new Firebase('https://chattybloc.firebaseio.com');
		rooms = $firebaseArray(ref.child('rooms'));
		var _addRoom = function(room){
			rooms.$add(room);
		};

		return {
			all: rooms,
			create: _addRoom
		};
	}

	angular
		.module('chatty')
		.factory('Room', ['$firebaseArray', Room]);
})();