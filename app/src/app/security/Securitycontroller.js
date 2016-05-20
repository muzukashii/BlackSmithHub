/**
 * Created by Bitee on 4/20/2016.
 */
(function () {
  angular
    .module('app')
    .controller('registerController', registerController)
    .controller('AccountController', AccountController)
    .controller('LoginController', LoginController);


  /** @ngInject */
  function registerController($http,$scope, $location ,registerService) {
    var vm = $scope;
    vm.user = {};
    vm.addUser = function () {
      registerService.save(vm.user);
    }
  }

  /** @ngInject */
  function AccountController( $scope,$rootScope, registerService, $route, queryProductService,changeRoleToAdmin) {
    var vm = $scope;
    //$http.get("/product/").success(function (data) {
    vm.queryPromise = registerService.query(function (data) {
      // $scope.totalNetPrice= totalCalService.getTotalNetPrice(data);
      vm.account = data;
    }).$promise;



    vm.updateAccount = function () {
      //$http.put("/product", $scope.product).then(function () {
      registerService.update({id: vm.account.id}, vm.account, function () {
        vm.Test1 = null;
        vm.editSuccess = true;
        $location.path("/index");
      });
    }

    vm.changeRoleToAdmin = function () {
      alert("Hello")
      changeRoleToAdmin.update($scope.user, function (data) {
        vm.account=data;
      })
    }

    $scope.$on('$locationChangeStart', function () {
      $rootScope.addSuccess = false;
      $rootScope.editSuccess = false;
      $rootScope.deleteSuccess = false;
    });

    vm.deleteAccount = function (id) {
      var answer = confirm("Do you want to delete the product?");
      if (answer) {
        productService.delete({id: id}, function () {
          $rootScope.deleteSuccess = true;
          $route.reload();
        })
      }
    }

    vm.searchAccount = function (name) {
      queryProductService.query({name: name}, function (data) {
        vm.products = data;
      });
    }
  }


  function  serializeData ( data ) {
    // If this is not an object, defer to native stringification.
    if ( ! angular.isObject ( data ) ){
      return( ( data == null ) ? "" : data.toString() );
    }

    var buffer = [];

    // Serialize each key in the object.
    for ( var name in data ) {
      if ( ! data.hasOwnProperty ( name ) ) {
        continue;
      }

      var value = data [ name ];

      buffer.push(encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
      );
    }

    //Serialize the buffer and clean it up for transportation.
    var  source = buffer.join("&").replace( /%20/g, "+" );
    return ( source );
  }

  /** @ngInject */
  function  LoginController ($route,$scope, $rootScope, $location, $cookies, UserService) {
    var vm = this;
    vm.rememberMe = false;
    vm.login = function () {
      UserService.authenticate(serializeData ({username:vm.username,password:vm.password}),
      // success connection
      function (authenticationResult) {
        $rootScope.HeadSuccess=null;
        $rootScope.HeadFail=null;
        $rootScope.result=null;
        $rootScope.error=null;
        var authToken = authenticationResult.token;
        $rootScope.authToken = authToken;
        if (vm.rememberMe) {
          $cookies.put('authToken', authToken);
        }
        UserService.get(function (user) {
          $rootScope.user = user;
          $rootScope.HeadSuccess ="Welcome";
          $rootScope.result = "Login Success";
          $location.path("/index");
        })
      },//unsuccess connection
        function(error) {
          if(error.status=="401"){
            $rootScope.HeadFail ="Warning";
            $rootScope.error="username or password is not correct";
          }
        }
      )
    }

  }
})();
