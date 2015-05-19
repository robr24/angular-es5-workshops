(function() {


    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        var vm = this;

        vm.date = new Date();
        vm.products = gem;

    });

    var gem = [
    {
        name: 'Diamond',
        price: 2222.95,
        description: 'Lucy in the Sky with...',
        canPurchase: true,
        outOfStock: false,
        imgUrl: 'images/diamond.jpg'
    },
    {
        name: 'Ruby',
        price: 222.95,
        description: 'Lucy in the Sky with...',
        canPurchase: null,
        outOfStock: null,
        imgUrl: 'images/diamond.jpg'
    },
    {
        name: 'Pearl',
        price: 22.95,
        description: 'Lucy in the Sky with...',
        canPurchase: true,

        imgUrl: 'images/diamond.jpg'
    },
    {
        name: 'Cobalt',
        price: 2.95,
        description: 'Lucy in the Sky with...',
        canPurchase: true,
        outOfStock: false,
        imgUrl: 'images/diamond.jpg'
    }
    ];


     app.controller('TabsController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };

    });




})();
