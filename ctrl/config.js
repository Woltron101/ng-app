var app = angular.module('app', [
    'ui.router',
    'ngStorage'
])
app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('catalog', {
            url: '/catalog',
            templateUrl: 'tamplates/catalog.html',
            conteroller: 'catalogCtrl'

        })
        .state('login', {
            url: '/login',
            templateUrl: 'tamplates/login.html',
            controller: 'loginCtrl'
        });
    $urlRouterProvider.otherwise('/login');
})

app.run(($rootScope, $sessionStorage, $injector, $location) => {
    let $scope = $injector.get('$rootScope');

    $rootScope.$on('$stateChangeStart', () => {
        if (!$sessionStorage.user) {
            $location.path('/login')
        }
    });
})
