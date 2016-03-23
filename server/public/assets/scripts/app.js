var myApp = angular.module("myApp",[]);

myApp.controller("MainController", ["$scope","$http", function($scope, $http){
  //refresh button get student data, shuffle, assign teams and display
  $scope.groupArray = [];
  $scope.assignNumGroups = function(number){
    $scope.numGroups = number;

  };

  $scope.getStudentData = function(){
    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      return $scope.studentArray;
    });

  $scope.refresh = function(){

      var allStudents = $scope.getStudentData();
      allStudents = shuffleArray(allStudents);


      for(var i = allStudents.length -1; i >0; i--){
          var targetNum = i % $scope.numGroups;
          var student = studentArray.pop();
          $scope.groupArray[targetNum].push(student);
        }
        console.log("Group Array: ", $scope.groupArray);
  };


  $scope.getStudentData = function(){
    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      console.log($scope.studentArray);
    });

    console.log("Function being executed");
  };

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
