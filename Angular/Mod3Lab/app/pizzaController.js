app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            toppings:[],
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers']
        };
        $scope.showTopping;
        $scope.addTopping = function (topping){
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.showTopping = true;
        }

        $scope.closeTopping = function (){
            $scope.showTopping = false;
        }
        
        //console.log($scope.results.length);

        //$scope.showNoResults = function(){
          //  return ($scope.model.search.length > 0 &&  === 0) ? true : false;
        //}
    }
]);