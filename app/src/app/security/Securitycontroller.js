/**
 * Created by Bitee on 4/20/2016.
 */
(function () {
  angular
    .module('app')
    .controller('LoginController', LoginController);
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
  function  LoginController ($scope, $rootScope, $location, $cookies, UserService) {
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
<<<<<<< HEAD
=======
          $location.path("/index")
>>>>>>> 88c1b74e4c3174b584f7ea050d83fc56350f4e27
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
