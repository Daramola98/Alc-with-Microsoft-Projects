angular.module('app')
    .factory('friendsService',['$http','$q', function($http, $q){
        return {
            getFriends : function(){
                var deferred = $q.defer();
                $http.get('http://jsonplaceholder.typicode.com/users').then(function(result){
                    deferred.resolve(result.data);
                })
                return deferred.promise;
            }
        }
    }])