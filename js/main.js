angular.module('todoApp',[])
  .controller('todoCtrl',function($scope){
    let fArr = []
    $scope.foodArr = fArr
    if($scope.foodArr.length ===0){
      $scope.foodArr = JSON.parse(localStorage.getItem('food'))
    }
    $scope.addFood = function(){
      let foodObj = {
        name:$scope.fName,
        number:$scope.fNumber,
        price:$scope.fPrice
      }
      fArr.push(foodObj)
      $scope.foodArr = fArr
      localStorage.setItem("food",JSON.stringify($scope.foodArr))
    }
    $scope.del = function(name){
      let theNo = fArr.indexOf(name)
      fArr.splice(theNo, 1)
      $scope.foodArr = fArr
      localStorage.setItem("food",JSON.stringify($scope.foodArr))
    }
    
  })