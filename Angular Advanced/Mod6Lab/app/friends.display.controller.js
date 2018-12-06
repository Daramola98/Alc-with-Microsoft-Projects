angular.module('app')
    .controller('friendsController',['friendsService',function(friendsService){
        var vm = this;
        vm.friends = [];
        vm.getFriends = function(){
            friendsService.getFriends().then(function(result){
                vm.friends = result;
            });
        }
    }])