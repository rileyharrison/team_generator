var myApp = angular.module("myApp",[]);

myApp.controller("MainController", ["$scope","$http", function($scope, $http){
  //refresh button get student data, shuffle, assign teams and display

  $scope.getStudentData = function(){
    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      console.log($scope.studentArray);
    });

    console.log("Function being executed");
  };

  $scope.getStudentData();
}]);//end of MainController

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
