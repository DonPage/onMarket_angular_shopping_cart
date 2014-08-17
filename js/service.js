/**
 * Created by donpage on 8/7/14.
 * shopping-app
 */

angular.module("shoppingApp")
    .service("shoppingService", function () {

        var itemsArray = [
            { itemName: "milk", itemPrice: parseFloat(3.21), itemAmount: 0, itemImg: "images/milk.png"},
            { itemName: "orange juice", itemPrice: parseFloat(3.11), itemAmount: 0, itemImg: "images/oj.png"},
            { itemName: "oreos", itemPrice: parseFloat(5.88), itemAmount: 0, itemImg: "images/oreo.png"},
            { itemName: "apples", itemPrice: parseFloat(0.31), itemAmount: 0, itemImg: "images/apples.png"},
            { itemName: "diet coke", itemPrice: parseFloat(1.07), itemAmount: 0, itemImg: "images/coke.png"},
            { itemName: "ice cream", itemPrice: parseFloat(6.99), itemAmount: 0, itemImg: "images/icecream.png"},
            { itemName: "grapes", itemPrice: parseFloat(1.01), itemAmount: 0, itemImg: "images/grapes.png"},
            { itemName: "cup cakes", itemPrice: parseFloat(6.39), itemAmount: 0, itemImg: "images/cupcakes.png"}
        ];

        var cartArray = [];

        this.getItemsArray = function () {
            var lsItemsArray = localStorage.getItem("onMarketShoppingApp");
            itemsArray = JSON.parse(lsItemsArray) || itemsArray;
            return itemsArray;
        };

        this.getCartArray = function () {
            var lsCartString = localStorage.getItem("onMarketCart");
            cartArray = JSON.parse(lsCartString) || cartArray;

            return cartArray;
        };


        this.getTotal = function () {
            var total = 0;

            for (var i = 0; i < cartArray.length; i++) {
                total += cartArray[i].itemPrice;
            }

            return total.toFixed(2);

        };

        this.addingItem = function (index) {
            itemsArray[index].itemAmount = itemsArray[index].itemAmount + 1;
            cartArray.push(itemsArray[index]);
            saveLS();
        };

        //removing item from cart. BROKEN
        this.removingItem = function (index) {
            var itemBeingRemoved = cartArray[index].itemName; //the item name is being found
            var allItemNames = [];
            for (var i = 0; i < itemsArray.length; i++){
                allItemNames.push(itemsArray[i].itemName);
            }
            var itemIndex = allItemNames.indexOf(itemBeingRemoved); //the item index is not being found.

            console.log(itemBeingRemoved, itemIndex);
            cartArray.splice(index, 1);
            itemsArray[itemIndex].itemAmount -= 1; //this is NOT going to work if itemIndex spitting out -1.
            saveLS();
        };


        this.addingItemShop = function (name, price, url) {
            var nameInput = name.toLowerCase();
            for (var i = 0; i < itemsArray.length; i++) {
                if (nameInput == itemsArray[i].itemName.toLowerCase()) {
                    alert('choose an unused name.');
                    break;
                }
            }

            itemsArray.push({itemName: name, itemPrice: parseFloat(price), itemAmount: 0, itemImg: url});
            saveLS();
        };

        function saveLS() {
            console.log('saving on Local Storage');
            var stringyItems = JSON.stringify(itemsArray);
            var stringyCart = JSON.stringify(cartArray);
            localStorage.setItem("onMarketCart", stringyCart);
            localStorage.setItem("onMarketShoppingApp", stringyItems);

        }


    });