angular.module("MyApp", ["firebase"])
	.controller("MyController", function($scope, $firebase){
		// $scope.title = "Hello World";
		var issuesRef = new Firebase("https://ssues.firebaseio.com")
		console.log(issuesRef);
		$scope.issues = $firebase(issuesRef);

		console.log($scope.issues[0]);

		$scope.addOne = function(){
    	// $scope.issues.$add( {title: $scope.title, body: $scope.body} );
		issuesRef.push( {title:$scope.title, body:$scope.body} );
		};
	});