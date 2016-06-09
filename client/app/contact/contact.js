'use strict';

angular.module('daleBellesApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  }]);
