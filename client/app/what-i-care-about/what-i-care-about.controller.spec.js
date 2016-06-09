'use strict';

describe('Controller: WhatICareAboutCtrl', function () {

  // load the controller's module
  beforeEach(module('daleBellesApp'));

  var WhatICareAboutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatICareAboutCtrl = $controller('WhatICareAboutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
