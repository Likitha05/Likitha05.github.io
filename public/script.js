'use strict';
var app=angular.module('app',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

 .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
             controller: "homeCtrl"
        })

 .state('aboutus', {
            url: '/aboutus',
            templateUrl: 'partials/aboutus.html',  
        })

 .state('products', {
            url: '/products',
            templateUrl: 'partials/products.html',
            controller: function($scope){
                 $scope.products=["Foundation Creams" , "Lotion", "FacePack","LipStick","EyeLiner","NailPolish"];
            }
        })

 

 .state('subscribe', {
            url: '/subscribe',
            templateUrl: 'partials/subscribe.html'
          
 
        })
   
      .state('feedback',{
        url:'/feedback',
        templateUrl: 'partials/feedback.html'
    
      })
   
  $urlRouterProvider.otherwise("/home");

});

