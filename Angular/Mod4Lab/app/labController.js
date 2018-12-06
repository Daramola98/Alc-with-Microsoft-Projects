app.controller('labController', [
    '$scope','$timeout','$q','$http','gitHub',
    function ($scope,$timeout,$q,$http,gitHub) {
        $scope.model = {
            number: 0,
            result: 'Ready',
            search: null
        };
        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;
        $scope.showAlert = true;
        $scope.model.students = null;
        $scope.getStudent = function(){
            $http.get('http://localhost:8001/api/student').then(function(response){
                $scope.model.students = response.data;
            }).catch(function(error){
                console.log(error);
            })
        }

        function getRepos(organisation) {
            $scope.model.getRepos = null;
            getReposApi(organisation).then(function(result){
                //console.log(Object.keys(result.$promise.$$state));
                $scope.model.repos = result;
               
            },function(result){
                //console.log(result);
              })
            
        }
        
        function loadDetail(name,organisation) {
            $scope.model.detail = null;
            loadDetailApi(name,organisation).then(function(result){
                $scope.model.detail = result;
            },function(result){
                $scope.model.repos.error = result;
            })
        }
        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
            })
        }
        function getReposApi(organisation){
            var defers = $q.defer();
            defers.resolve(gitHub.getAll({org:organisation}));
            defers.reject('Error');
            return defers.promise;
        }
        function loadDetailApi(name,organisation){
            var defered = $q.defer();
            defered.resolve(gitHub.getDetail({id:name, org:organisation}));
            defered.reject('Error Occurred');
            return defered.promise;
        }
        function checkOddNumberHandler(input) {
            var defer = $q.defer();
    
            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);
    
            return defer.promise;
        }
        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }
    }
]);