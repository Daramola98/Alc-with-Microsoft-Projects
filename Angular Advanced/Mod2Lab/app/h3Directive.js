angular.module('app').directive('h3Directive', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            title: '@'
        },
        template: `<div id="page"><h3>{{title}}</h3><h4>{{maker}} produces {{h3Controller.gears}}</h4</div>`,
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.css('background-color', 'red')
            });
            scope.maker = scope.$eval(attrs.attributeValue);
            scope.gear = "OculusRift";
            element.bind('mouseleave', function () {
                element.css('background-color', 'silver')
            });
        },
        controller: function(){
            this.gears = "google Cardboard";
            this.attributeValue = "Google";
        },
        controllerAs : 'h3Controller'
    };
});