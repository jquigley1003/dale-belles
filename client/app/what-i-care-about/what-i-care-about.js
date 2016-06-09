'use strict';

angular.module('daleBellesApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('whatICareAbout', {
        url: '/what-i-care-about',
        templateUrl: 'app/what-i-care-about/what-i-care-about.html',
        controller: 'WhatICareAboutCtrl'
      });
  }]);
