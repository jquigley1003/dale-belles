'use strict';

angular.module('daleBellesApp.auth', [
  'daleBellesApp.constants',
  'daleBellesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
