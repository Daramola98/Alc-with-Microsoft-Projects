var module = angular.module('listApp',[]);

module.controller('listController', function($scope, $http){
    $scope.items = ['First Item'];
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }        
    }
    $http.get('http://httpbin.org/ip')
         .then(function(response){
            $scope.resultJSON = JSON.stringify(response);
            $scope.resultProperty = response.data.origin;
         });
    
    $scope.search = function(){
        if($scope.searchText){
            $http.get("http://www.omdbapi.com/?t="+$scope.searchText+"&plot=full&apikey=3111506f")
                  .then(function(response){
                      console.log(response);
                      document.getElementById('details').innerHTML = `<div class="table-responsive"><table class="table table-hover table-bordered">
                      <thead>
                      <tr class="success">
                      <td>Title</td>
                      <td>Year</td>
                      <td>Actors</td>
                      <td>Awards</td>
                      <td>Director</td>
                      <td>Genre</td>
                      <td>Rated</td>
                      <td>Released</td>
                      <td>Runtime</td>
                      <td>Website</td>
                      <td>Plot</td>
                      <td>Writer</td>
                      <td>imdbRating</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <td>${response.data.Title}</td>
                      <td>${response.data.Year}</td>
                      <td>${response.data.Actors}</td>
                      <td>${response.data.Awards}</td>
                      <td>${response.data.Director}</td>
                      <td>${response.data.Genre}</td>
                      <td>${response.data.Rated}</td>
                      <td>${response.data.Released}</td>
                      <td>${response.data.Runtime}</td>
                      <td><a href="${response.data.Website}">Movie Website</a></td>
                      <td>${response.data.Plot}</td>
                      <td>${response.data.Writer}</td>
                      <td>${response.data.imdbRating}</td>
                      </tr>
                      </tbody>
                      <tfooter>
                      <tr>
                      <td colspan="13">Information from My Movie Api</td>
                      </tr>
                      </tfooter>                
                      </table></div>`;
                  })
        }

    }

});