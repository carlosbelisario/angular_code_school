(function() {
    /**
     * angular appication
     * @type {angular.Module}
     */
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.product = gem;
    });

    var gem = {
        "name": "Decoratiom",
        "price": 12.9,
        "description": ". . ."
    }

})();
