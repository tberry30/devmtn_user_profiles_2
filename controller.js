var app = angular.module('userProfiles')
	.controller('MainController', function($scope, mainService) {
    
	var currentPage = 1;
	var maxPages = 4;
	var minPages = 1;

	$scope.getUsers = function() {
		mainService.getUsers(currentPage)
		.then(function(response) {
		    $scope.users = response.data.data;
		    maxPages = response.data.total_pages;
		})
	}

	$scope.isNotAtMax = function() {
		return currentPage < maxPages;
	}
	$scope.isNotAtMin = function() {
		return currentPage > minPages;
	}


	$scope.next = function() {
		if($scope.isNotAtMax()) {
			currentPage++;
			$scope.getUsers();
		}
	}

	$scope.previous = function() {
		if($scope.isNotAtMin()) {
			currentPage--;
			$scope.getUsers();
		}
	}

	$scope.getUsers();

});