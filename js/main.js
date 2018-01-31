angular.module('todoApp',[])
  .controller('todoCtrl',function($scope){
    let fArr = JSON.parse(localStorage.getItem('food'))
     
    $scope.foodArr = fArr
    $scope.totalPrice = 0
  
    $scope.addFood = function(){
      let foodObj = {
        name:$scope.fName,
        number:$scope.fNumber,
        price:$scope.fPrice
      }
      fArr.push(foodObj)
      $scope.foodArr = fArr
      for(let i =0,length=$scope.foodArr.length;i<length;i++){
        console.log($scope.foodArr)
      }
      localStorage.setItem("food",JSON.stringify($scope.foodArr))
    }
    $scope.del = function(name){
      let theNo = fArr.indexOf(name)
      fArr.splice(theNo, 1)
      $scope.foodArr = fArr
      localStorage.setItem("food",JSON.stringify($scope.foodArr))
    }
    
  })