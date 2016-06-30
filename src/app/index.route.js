(function() {
  'use strict';

  angular
    .module('dndtracker')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('initiative', {
        url: '/initiative',
        templateUrl: 'app/initiative/initiative.html',
        controller: 'InitiativeController',
        controllerAs: 'initCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
