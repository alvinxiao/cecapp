// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.service('AliensService', function($q) {
  return {
    aliens: [
      { 
        "name": "Virus",
        "power": "You have the power to Multiply. As a main player, after you reveal an attack card in an encounter, use this power to multiply the number of ships you have in the encounter times the value of your card instead of adding. Your allies' ships are still added to your total as usual.",
        "level": "expert",
        "wild": "As a main player you may multiply the number of ships you have in the encounter by the number of ships allied with you instead of adding them.",
        "super": "You may multiply the total of all ships on your side by your attack card when using your power, not just your own.",
        "history": "Able to multiply rapidly in the presence of other life forms, the Virus soon overwhelmed its own planets and now waits for opportunities to proliferate throughout the Universe.",
        "summary": "Mutiplies in Attack",
        "xpac": "Base Game"
      },
      { 
        "name": "Balll",
        "power": "You have the power to Multiply. As a main player, after you reveal an attack card in an encounter, use this power to multiply the number of ships you have in the encounter times the value of your card instead of adding. Your allies' ships are still added to your total as usual.",
        "level": "expert",
        "wild": "As a main player you may multiply the number of ships you have in the encounter by the number of ships allied with you instead of adding them.",
        "super": "You may multiply the total of all ships on your side by your attack card when using your power, not just your own.",
        "history": "Able to multiply rapidly in the presence of other life forms, the Virus soon overwhelmed its own planets and now waits for opportunities to proliferate throughout the Universe.",
        "summary": "Mutiplies in Attack",
        "xpac": "Base Game"
      }
    ],
    getAliens: function() {
      return this.aliens
    },
    getAlien: function(alienName) {
      var dfd = $q.defer()
      this.aliens.forEach(function(alien) {
        if (alien.name === alienName) dfd.resolve(alien)
      })

      return dfd.promise
    }

  }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.aliens', {
    url: "/aliens",
    views: {
      'menuContent': {
        templateUrl: "templates/aliens.html",
        controller: 'AliensCtrl',
        resolve: {
          aliens: function(AliensService) {
            return AliensService.getAliens()
          }
        }
      }
    }
  })

  .state('app.alien', {
    url: "/aliens/:alienName",
    views: {
      'menuContent': {
        templateUrl: "templates/alien.html",
        controller: 'AlienCtrl',
        resolve: {
          alien: function($stateParams, AliensService) {
            return AliensService.getAlien($stateParams.alienName)
          }
        }
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/aliens');
});
