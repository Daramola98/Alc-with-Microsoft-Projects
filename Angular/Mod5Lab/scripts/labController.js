app.controller('labController', [
    '$scope','registration',
    function ($scope, registration) {
        $scope.reset = reset;
        reset();
        function reset() {
            $scope.model = {};
        };
        $scope.submit = submit;

        function submit(model) {
            registration.submit(model).$promise.then(function (response) {
                    $scope.userToken = response.token;
                    $scope.reset();
                },
                function (response) {
                    alert('error');
                });
        }
    }
]);