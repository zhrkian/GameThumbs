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
                gameThumb: '='
            },
            link: function postLink(scope, element) {
                var thumbnail = element[0].querySelector('.thumbnail'),
                    hoveredElement = thumbnail;

                function toggleOverlay (toggle) {
                    var overlay = toggle ? 'add' : 'remove';

                    thumbnail.classList[overlay]('thumbnail--toggle-overlay');

                    if (scope.gameThumb.contentOverlayed) {
                        thumbnail.classList[overlay]('thumbnail--toggle-content');
                    }
                }

                if (scope.gameThumb.contentOverlayed){
                    element[0].classList.add('thumbnail--content--overlayed');
                }

                if (scope.gameThumb.toggle === 'image') {
                    hoveredElement = hoveredElement.querySelector('.thumbnail__holder');
                }

                if (typeof scope.gameThumb.toggle === 'string') {
                    hoveredElement.addEventListener('mouseenter', function () {
                        toggleOverlay(true);
                    });
                    var leaveElement = scope.gameThumb.contentOverlayed ? thumbnail : hoveredElement;
                    leaveElement.addEventListener('mouseleave', function () {
                        toggleOverlay(false);
                    });
                } else {
                    scope.$watch(function () {
                        return scope.gameThumb.toggle;
                    }, function () {
                        toggleOverlay(scope.gameThumb.toggle);
                    }, true);
                }
            }
        };

    });
