(function(){
	function Room($firebaseArray){
		var ref = new Firebase('https://chattybloc.firebaseio.com');
		rooms = $firebaseArray(ref.child('rooms'));
		messages = $firebaseArray(ref.child('messages'))
		var _getMessages = function(roomId){
			return $firebaseArray(ref.child('messages').orderByChild('roomId').equalTo(roomId))	
		}

		var _addRoom = function(room){
			rooms.$add(room);
		};

		return {
			all: rooms,
			create: _addRoom,
			getMessages: _getMessages
		};
	}

	angular
		.module('chatty')
		.factory('Room', ['$firebaseArray', Room]);
})();