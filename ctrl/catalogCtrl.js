app.controller('catalogCtrl', ($scope, $http, $state, $sessionStorage) => {
    $http.get('json/catalog.json').success((response) => {
        $scope.catalog = response;
    });

    $scope.user = $sessionStorage.user;

    $scope.popup = {
        id: 'id1',
        name: 'phone1',
        price: 1.99,
        img: 1,
        active: false
    };

    $scope.showPopup = function() {
        let clickedElId = this.item.id,
            catalog = $scope.catalog;

        for (let i = catalog.length - 1; i >= 0; i--) {
            if (catalog[i].id == clickedElId) {
                $scope.popup = catalog[i];
                $scope.popup.active = true;
            }
        }
    }

    $scope.hidePopup = (e) => {
        let target = angular.element(e.target);

        if (target.hasClass('popup-wrap') || target.hasClass('close')) {
            $scope.popup.active = false;
        }
    }

    $scope.logOut = () => {
        delete $sessionStorage.user;
        $state.go('login');
    }
})
