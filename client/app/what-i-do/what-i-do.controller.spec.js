'use strict';

describe('Controller: WhatIDoCtrl', function () {

  // load the controller's module
  beforeEach(module('daleBellesApp'));

  var WhatIDoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatIDoCtrl = $controller('WhatIDoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
