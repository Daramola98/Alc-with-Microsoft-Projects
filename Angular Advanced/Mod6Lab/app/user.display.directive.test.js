describe('UserDisplayDirective', function () {
    var $compile, $scope, element, users;
    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
        })
        it('should compile an element', function () {
            users = [{
                    first_name: 'Elvis',
                    last_name: 'Presley',
                    avatar: 'https://unsplash.it/200'
                },
                {
                    first_name: 'Johnny',
                    last_name: 'Cash',
                    avatar: 'https://unsplash.it/300'
                },
                {
                    first_name: 'Carl',
                    last_name: 'Perkins',
                    avatar: 'https://unsplash.it/400'
                }
            ];
            $scope.users = users;
            element = $compile('<user-display-directive users="users"></user-display-directive>')($scope);
            $scope.$digest();
            expect(element).toBeDefined();
        });

    })
})