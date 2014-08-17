/**
 * Created by donpage on 8/5/14.
 */

function shoppingList($scope){

    $scope.testing = "something";

    $scope.itemsArray = [
        { itemName: "Milk", itemPrice: parseFloat(7.21)},
        { itemName: "Waffles", itemPrice: parseFloat(7.91)},
        { itemName: "OrangeJuice", itemPrice: parseFloat(7.11)},
        { itemName: "AppleJuice", itemPrice: parseFloat(7.88)},
        { itemName: "Apples", itemPrice: parseFloat(7.41)}
    ];

    $scope.cartArray = [];

    $scope.totalAmount = 0;


    $scope.addItemToCart = function(itemBeingAdded){
        console.log(itemBeingAdded, 'clicked');
        var removed = $scope.itemsArray.splice(itemBeingAdded, 1);
       $scope.cartArray.push(removed);
//        var cartArrayAmount = $scope.cartArray.length;
//        console.log($scope.cartArray[cartArrayAmount - 1][0].itemPrice);
        total();

    };

    $scope.removeItemFromCart = function(itemBeingRemoved){
      var removed = $scope.cartArray.splice(itemBeingRemoved, 1);
        $scope.itemsArray.push(removed);
        console.log(removed);
        console.log($scope.itemsArray);
        total();
    };

    function total(){
        $scope.totalAmount = parseFloat(0);

        for(var i = 0; i < $scope.cartArray.length; i++){
            var add = $scope.cartArray[i][0].itemPrice;

            $scope.totalAmount += parseFloat(add);

        }
    }
}