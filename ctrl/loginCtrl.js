app.controller('loginCtrl', function($scope, $http, $state, $sessionStorage) {
    let users;
    $http.get('json/users.json').success((response) => {
        users = response;
    });
    $scope.logIn = () => {
        for (let i = users.length - 1; i >= 0; i--) {
            if ($scope.login == users[i].login && $scope.password == users[i].password) {
                $sessionStorage.user = $scope.login;
                $state.go('catalog');
                return;
            }
        }
        alert('error');
    }
    $scope.logginOnEnter = (e) => {
        if (e.keyCode == 13) {
            $scope.logIn();
        }
    }
})
