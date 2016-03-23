var myApp = angular.module("myApp",[]);
var studentArray;

myApp.controller("MainController", ["$scope","$http", function($scope, $http){
  //refresh button get student data, shuffle, assign teams and display

  $scope.appendButtons = function(){
    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      //console.log("Inside Get Request: ", $scope.studentArray);
    });
  }


  $scope.assignNumGroups = function(number){
    $scope.numGroups = number;
    console.log("Group number : ", $scope.numGroups);
  };

  $scope.getStudentData = function(){


    $http.get("/kappaStudents").then(function(response){
      $scope.studentArray = response.data.students;
      //console.log("Inside Get Request: ", $scope.studentArray);
    });
    //return $scope.studentArray;
  };



  $scope.refresh = function(){
      $scope.groupArray = [];
      $scope.getStudentData();
      // var allStudents = $scope.studentArray;
      $scope.studentArray = shuffleArray($scope.studentArray);
      // console.log('All Students array', allStudents);

        for(var i = 0; i<$scope.numGroups; i++){
            $scope.groupArray.push([]);
        }


      for(var i = $scope.studentArray.length - 1; i >0; i--){
          var targetNum = i % $scope.numGroups;
          var student = $scope.studentArray.pop();
          $scope.groupArray[targetNum].push(student);

        }

          console.log("Group Array: ", $scope.groupArray);
  };

$scope.getStudentData();
}]);//end of MainController


function shuffleArray(array) {
    //console.log("Array", array);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
