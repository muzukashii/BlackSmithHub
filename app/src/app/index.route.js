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
    when('/index',{
      templateUrl: 'app/main/main.html'
    }).
    when('/Product1',{
      templateUrl: 'app/product/ProductT1.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/Product2',{
      templateUrl: 'app/product/ProductT2.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/Product3',{
      templateUrl: 'app/product/ProductT3.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/Product4',{
      templateUrl: 'app/product/ProductT4.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/ProductItem/:id',{
      templateUrl: 'app/product/ProductItem.html',
      controller: 'viewProductController',
      controllerAs: 'vm'
    }).
    // when('/shoppingCart/:id',{
    //   templateUrl: 'app/shoppingcart/shoppingCart.html',
    //   controller: 'shoppingCartController',
    //   controllerAs: 'vm'
    // }).
    when('/shoppingCart',{
      templateUrl: 'app/shoppingcart/shoppingCart.html',
      controller: 'shoppingCartController',
      controllerAs: 'vm'
    }).
    when('/ManageProduct',{
      templateUrl: 'app/product/manageProduct.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/ManageAccount',{
      templateUrl: 'app/security/manageAccount.html',
      controller: 'AccountController',
      controllerAs: 'vm'
    }).
    when('/addProduct',{
        templateUrl: 'app/product/AEProduct.html',
        controller: 'addProductController',
        controllerAs: 'addProductController'
      }).
      when('/editProduct/:id',{
        templateUrl: 'app/product/AEProduct.html',
        controller: 'editProductController',
        controllerAs: 'editProductController'
      }).
    when('/About',{
      templateUrl: 'app/Extras/about.html'
    }).
    when('/404Page',{
      templateUrl: 'app/Extras/404.html'
    }).
    when('/Blog1',{
      templateUrl: 'app/Extras/blog-home-1.html'
    }).
    when('/Blog2',{
      templateUrl: 'app/Extras/blog-home-2.html'
    }).
    when('/BlogPost',{
      templateUrl: 'app/Extras/blog-post.html'
    }).
    when('/Contact',{
      templateUrl: 'app/Extras/contact.html'
    }).
    when('/FAQ',{
      templateUrl: 'app/Extras/faq.html'
    }).
    when('/FullWidth',{
      templateUrl: 'app/Extras/full-width.html'
    }).
    when('/Pricing',{
      templateUrl: 'app/Extras/pricing.html'
    }).
    when('/Service',{
      templateUrl: 'app/Extras/services.html'
    }).
    when('/SideBar',{
      templateUrl: 'app/Extras/sidebar.html'
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
    otherwise({redirectTo: '/'});

  }

})();
