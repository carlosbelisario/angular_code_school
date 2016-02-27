(function() {
    /**
     * angular appication
     * @type {angular.Module}
     */
    var app = angular.module('store', []);

    /**
     * 
     * StoreController
     */
    app.controller('StoreController', function() {
        this.product = gem;
    });

    /**
     *
     * @type {{name: string, price: number, description: string}}
     */
    var gem = {
        "name": "Decoratiom",
        "price": 12.9,
        "description": ". . ."
    }

})();
