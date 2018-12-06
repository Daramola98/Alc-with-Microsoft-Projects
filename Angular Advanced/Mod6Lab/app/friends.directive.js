angular.module('app')
    .directive('friendsDirective',[function(){
        return {
            restrict : 'E',
            scope : {
                friends: '='
            },
            templateUrl: 'app/friends.display.template.html'
        }
    }])