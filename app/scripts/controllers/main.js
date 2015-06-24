'use strict';

/**
 * @ngdoc function
 * @name gameThumbsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameThumbsApp
 */
angular.module('gameThumbsApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.thumbnails = [
            {
                type: '',
                image: '/images/invisible-man.jpg'
            },
            {
                type: 'static',
                image: '/images/invisible-man.jpg'
            },
            {
                type: 'lobby',
                image: '/images/invisible-man.jpg'
            }
        ];

        $scope.testOverlay = function (toggle) {
            console.log('testOverlay', toggle);
            toggle.toggle = !toggle.toggle;
        };

        $scope.testContent = function (toggle) {
            console.log('testContent', toggle);
            toggle.toggle = !toggle.toggle;
        };
    });
