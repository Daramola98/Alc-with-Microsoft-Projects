angular.module('app')
    .directive('authorDirective', function () {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                data: '=',
                action: '&'
            },
            link: function (scope, elem, attrs) {

            },
            template: `<table class="table">
                        <tr>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>Dates</th>
                        </tr>
                        <tr ng-repeat = "dati in data" ng-mouseenter="hover=true" ng-mouseleave="hover=false" ng-class="{silver: hover}">
                            <td>{{dati.name}}</td>
                            <td>{{dati.nationality}}</td>
                            <td>{{dati.dates}}</td>
                            <td><button type="button" class="btn btn-primary" ng-click="action({person:dati})">Details</button></td>
                            <td><button type="button" class="btn btn-primary" ng-click="dati.name='food'">Details</button></td>
                        </tr>
                      </table>`

        }
    })