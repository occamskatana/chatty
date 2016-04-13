(function(){
	function ModalCtrl($scope, $uibModal){

		$scope.modal;

		$scope.open = function() {
		 $scope.modal =	$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalInstanceCtrl'
			})
		}

		
		

	}

	angular
		.module('chatty')
		.controller('ModalCtrl', [ '$scope', '$uibModal', ModalCtrl])
})();

//actual instance control

(function(){
	function ModalInstanceCtrl($scope, $uibModalInstance){

		$scope.ok = function(){
			$uibModalInstance.close();
		}

		$scope.cancel = function(){
			$uibModalInstance.close();
		}

	}

	angular	
		.module('chatty')
		.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl])
})();