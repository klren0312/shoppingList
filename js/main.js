angular.module('todoApp',[])
  .controller('todoCtrl',function($scope){
    $scope.foodArr =[]
    console.log($scope.foodArr)
    if($scope.foodArr.length ===0){
      $scope.foodArr = JSON.parse(localStorage.getItem('food'))
    }
    $scope.addFood = function(){
      let foodObj = {
        name:$scope.fName,
        number:$scope.fNumber,
        price:$scope.fPrice
      }
      $scope.foodArr.push(foodObj)
      localStorage.setItem("food",JSON.stringify($scope.foodArr))
    }
  })