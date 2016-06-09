'use strict';

angular.module('daleBellesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('whatIDo', {
        url: '/what-i-do',
        templateUrl: 'app/what-i-do/what-i-do.html',
        controller: 'WhatIDoCtrl'
      });
  });
