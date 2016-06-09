'use strict';

angular.module('daleBellesApp')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }]);
