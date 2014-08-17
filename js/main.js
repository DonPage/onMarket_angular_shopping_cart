/**
 * Created by donpage on 8/5/14.
 */


angular.module("shoppingApp", [])
    .controller("shoppingList", function ($scope, shoppingService) {

        $scope.itemsArray = shoppingService.getItemsArray();
        $scope.cartArray = shoppingService.getCartArray();

        $scope.addItemToCart = function(itemBeingAdded){
            shoppingService.addingItem(itemBeingAdded);
            $scope.totalAmount = shoppingService.getTotal();

            $scope.amountOfThisItem = function(i){
                shoppingService.getAmount(i);
            }
        };

        $scope.removeItemFromCart = function(itemBeingRemoved){
            shoppingService.removingItem(itemBeingRemoved);
            $scope.totalAmount = shoppingService.getTotal();
        };

        $scope.picInput = 'http://placehold.it/204x214';

        $scope.addItemToShop = function(name, price, url){
            shoppingService.addingItemShop(name, price, url);

            $scope.picInput = 'http://placehold.it/204x214';
            $scope.nameInput = '';
            $scope.priceInput = '';
        };







    });

