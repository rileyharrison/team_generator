var myApp = angular.module("myApp",[]);

myApp.controller("MainController", ["$scope","$http", function($scope, $http){

  $scope.getStudentData = function(){
    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      console.log($scope.studentArray);
    });

    console.log("Function being executed");
  };

  $scope.getStudentData();

}]);
