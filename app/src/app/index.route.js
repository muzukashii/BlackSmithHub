(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.
    when('/',{
      templateUrl: 'app/main/main.html'
    }).
    when('/Product1',{
      templateUrl: 'app/product/ProductT1.html'
    }).
    when('/Product2',{
      templateUrl: 'app/product/ProductT2.html'
    }).
    when('/Product3',{
      templateUrl: 'app/product/ProductT3.html'
    }).
    when('/Product4',{
      templateUrl: 'app/product/ProductT4.html'
    }).
    when('/ProductItem',{
      templateUrl: 'app/product/ProductItem.html'
    }).
    // when('/addProduct',{
    //   templateUrl: 'app/product/editProduct.html',
    //   controller: 'addProductController',
    //   controllerAs: 'addProductController'
    // }).
    // when('/editProduct/:id',{
    //   templateUrl: 'app/product/editProduct.html',
    //   controller: 'editProductController',
    //   controllerAs: 'editProductController'
    // }).
    // when('/listProduct',{
    //   templateUrl: 'app/product/productList.html',
    //   controller: 'listProductController',
    //   controllerAs: 'vm'
    // }).
    // when('/shoppingCart/:id',{
    //   templateUrl: 'app/shoppingcart/shoppingCart.html',
    //   controller: 'showShoppingCartController',
    //   controllerAs: 'vm'
    // }).
    // when('/location',{
    //   templateUrl: 'app/CheckIn/Location.html',
    //   controller: 'locationController'
    // }).
    otherwise({redirectTo: '/index'});

  }

})();
