/**
 * Created by MrHai on 2016/5/4.
 */
angular.module('zjfae.directives',[])
  .directive('hideTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function () {
          scope.$watch(attributes.hideTabs, function (value) {
            $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function () {
          $rootScope.hideTabs = false;
        });
      }
    };
  })
  .directive("ionSuccess", function () {
    var option = {
      restrict: "E",
      template: '<div class="icon-success">'+
      '<svg viewBox="0 0 161.2 161.2">'+
      '<circle  fill="none" stroke="#444" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="70.1"/>'+
      '<polyline class="path" fill="none" stroke="#444" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8 74.1,108.4 48.2,86.4 "/>'+
      '</svg>'+
      '</div>',
    };
    return option;
})/*.directive('focusMe', ['$timeout', function($timeout) {
 return {
 scope: { trigger: '@focusMe' },
 link: function(scope, element) {
 scope.$watch('trigger', function(value) {
 if(value === "true") {
 $timeout(function() {
 element[0].focus();
 });
 }
 });
 }
 };
 }]);*/
