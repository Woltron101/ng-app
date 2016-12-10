app.controller('loginCtrl', function($scope, $http) {
    $scope.a = false;
    var users;
    $http.get('json/users.json').success(function(response) {
        users = response;
    });
    $scope.logIn = function() {
        for (var i = users.length - 1; i >= 0; i--) {
            if ($scope.login == users[i].login && $scope.password == users[i].password) {
                window.location.hash = "#/catalog";
                return false;
            }

        }
        alert('error');
        return false;

    }

})
