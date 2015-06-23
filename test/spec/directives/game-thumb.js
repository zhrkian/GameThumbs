'use strict';

describe('Directive: gameThumb', function () {

  // load the directive's module
  beforeEach(module('gameThumbsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-thumb></game-thumb>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gameThumb directive');
  }));
});
