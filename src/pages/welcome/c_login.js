var app = angular.module('ionic2app', []);

app.controller('myctrl', function ($scope) {
	$scope.vorname = "David";
	$scope.nachname = "Miz";
});


app.controller('loginctrl', function ($scope, $http) {
	//var Indata = { 'username': 'user1', 'password': 'pw1' };
	//$http({
	//	method: "POST",
	//	url: "http://www.orga-nicer.org/organice/selectjson.php",
	//	params: Indata
	//}).then(function mySucces(response) {
	//	$scope.myData = response.data.Person;
	//}, function myError(response) {
	//	$scope.myData = response.statusText;
	//});
	var Indata = { 'username': 'user1', 'password': 'pw1' };
	$http.post("http://www.orga-nicer.org/organice/selectjson.php", {
		'username': 'user1',
		'password': 'pw1'
	})

		.success(function (data, status, headers, config) {
			console.log("Data Inserted Successfully");
			$scope.myData = data.Person;
			// here: refresh values after success
		});

	$scope.insert = function () {
		$http.post("http://www.orga-nicer.org/organice/insertjson.php", {
			'vorname': $scope.bname,
			'nachname': $scope.bauthor,
			'username': $scope.bprice,
			'password': $scope.blanguage
		})

		.success(function (data, status, headers, config) {
			console.log("Data Inserted Successfully");
			// here: refresh values after success
		});
	}
});


//change $_GET to $_POST in selectjson.php
