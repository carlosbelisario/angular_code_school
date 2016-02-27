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
        this.products = gems;
    });

    /**
     *
     * @type {{name: string, price: number, description: string, cansPruchase: boolean}}
     */
    var gems = [
        {
            "name": "Decoratiom",
            "price": 12.9,
            "description": ". . .",
            "canPruchase": true,
            "soldOut": false
        },
        {
            "name": "Pentagonal Gem",
            "price": 5.98,
            "description": ". . .",
            "canPruchase": false,
            "soldOut": false
        }
    ];

})();
