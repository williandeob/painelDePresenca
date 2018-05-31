var painel = angular.module('painel', [
    'ui.router',
    'oc.lazyLoad'
]);

painel.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

     $stateProvider
            .state('painel', {
                url: '/',
                data: {
                    pageTitle: 'Painel de presenca'
                },
                templateUrl: 'view/painel/painel.html',
                controller: 'painelController',
                controllerAs: 'painel',
                resolve: {
                    loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load({
                            name: 'painel',
                            files: [
                                'src/controller/painel/painelController.js'
                            ]
                        });
                    }]
                }
            })

     $urlRouterProvider.otherwise('/');

}]);

painel.run(['$rootScope', function ($rootScope) {

}]);