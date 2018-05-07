var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){

	//Add new user
	$scope.newUser = {};
	
	//Default user
	$scope.users = [
		{fullName: "Md. Fazlay Rabbi", userName: "frabbi", email: "frabbi@gmail.com"},
		{fullName: "Shawon Chowdhury", userName: "ketra", email: "ketra@gmail.com"},
		{fullName: "Mrityunjoy Das", userName: "kc", email: "mjoy@gmail.com"}
	];

	//Push new user
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};


	//Select clicked user
	$scope.clickedUser = {};

	//Select user for update or delete
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	//Update user
	$scope.updateUser = function(user){};

	//Delete user
	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};


});