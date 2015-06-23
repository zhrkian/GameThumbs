'use strict';

/**
 * @ngdoc directive
 * @name gameThumbsApp.directive:gameThumb
 * @description
 * # gameThumb
 */
angular.module('gameThumbsApp')
    .directive('gameThumb', function () {
        return {
            restrict: 'AE',
            transclude: true,
            templateUrl: '/views/game-thumb.html',
            scope: {
                gameThumbType: '@',
                gameThumbImage: '@',
                gameThumbToggle: '='
            },
            link: function postLink(scope, element, attrs) {
                var gameThumb = element[0].querySelector('.game-thumb');
                scope.gameThumbToggle = false;

                if (!scope.gameThumbType) {
                    var gameThumbContent = element[0].querySelector('.game-thumb__content');
                    gameThumbContent.setAttribute('style', 'display: none !important;')
                }

                scope.$watch(function () {
                    return scope.gameThumbToggle;
                }, function () {
                    console.log(scope.gameThumbToggle);
                    scope.gameThumbToggle ?
                        gameThumb.classList.add('active') :
                        gameThumb.classList.remove('active');
                }, true);
            }
        };

    });
