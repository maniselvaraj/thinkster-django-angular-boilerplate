

/*
is this the main angular module?
 */

(function(){

  'use strict';

  angular
      .module('thinkster',[
          'thinkster.config',
          'thinkster.routes',
          'thinkster.authentication'
      ]);

  angular
      .module('thinkster.config',[]);
  angular
      .module('thinkster.routes', ['ngRoute']);


  angular
      .module('thinkster')
      .run(run);

  run.$inject = ['$http'];

  function run($http){
    $http.default.xsrfHeaderName = 'X-CSRFToken';
    $http.default.xsrfCookieName = 'csrfToken';
  }

})();