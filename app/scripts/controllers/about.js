'use strict';

/**
 * @ngdoc function
 * @name gameThumbsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gameThumbsApp
 */
angular.module('gameThumbsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
