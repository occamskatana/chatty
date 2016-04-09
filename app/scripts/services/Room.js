(function(){
	function Room($firebaseArray){
		var firebaseRef = new Firebase("https://boiling-torch-5645.firebaseio.com/")
		var rooms = $firebaseArray(firebaseRef.child('rooms'))
		
	
		return {
			all: rooms,
		};
	}

	angular
		.module('chatty')
		.factory('Room', ['$firebaseArray', Room]);
})();