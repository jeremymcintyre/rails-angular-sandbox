angular
  .module('myApp', [
    'ngAnimate',
    'ui.router',
    'templates'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    /**
      * Routes and States
      */
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })

      .state('articles', {
        abstract: true,
        url: '/articles',
        templateUrl: 'articles/layout.html'
      })

        .state('articles.one', {
          url: '',
          templateUrl: 'articles/one.html'
        })

        .state('articles.two', {
          url: '/two',
          templateUrl: 'articles/two.html'
        })

        .state('articles.three', {
          url: '/three',
          templateUrl: 'articles/three.html'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 mode for SEO
    $locationProvider.html5Mode(true);

  });