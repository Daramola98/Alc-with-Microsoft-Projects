angular.module('app').controller('UserDisplayController', ['UserService', 'friendsService', userDisplayController]);

function userDisplayController(userService, friendsService) {
    var vm = this;
    vm.users = [];
    vm.executeSearch = executeSearch;

    function executeSearch() {
        userService.getUsers().then(getUsersSuccess);
    }

    function getUsersSuccess(result) {
        vm.users = result;
    }

    vm.friends = [];
    vm.getFriends = function () {
        friendsService.getFriends().then(function (result) {
            vm.friends = result;
        });
        console.log(vm.friends);
    }
}