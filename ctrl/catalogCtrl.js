var app = angular.module('app', ['ui.router']);
app.controller('catalogCtrl', function($scope, $http) {
    $http.get('json/catalog.json').success(function(response) {
        $scope.catalog = response;
    });

    $scope.popup = {
        id: 'id1',
        name: 'phone1',
        price: 1.99,
        img: 1,
        active: false
    };

    $scope.showPopup = function() {
        var clickedElId = this.item.id,
            catalog = $scope.catalog;

        for (var i = catalog.length - 1; i >= 0; i--) {
            if (catalog[i].id == clickedElId) {
                $scope.popup = catalog[i]
                $scope.popup.active = true;
            }
        }
    }

    $scope.hidePopup = function(e) {
        var target = angular.element(e.target);

        if (target.hasClass('popup-wrap') || target.hasClass('close')) {
            $scope.popup.active = false;
        }
    }
})
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('catalog', {
        url: '/catalog',
        templateUrl: 'tamplates/catalog.html',
        conteroller: 'catalogCtrl'

    })
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'tamplates/login.html',
        controller: 'loginCtrl'
    })

})
