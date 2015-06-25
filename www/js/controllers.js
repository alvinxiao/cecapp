angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AliensCtrl', function($scope, aliens) {
  $scope.aliens = aliens;
  // $scope.aliens = [
  //   { 
  //     "name": "virus",
  //     "power": "You have the power to Multiply. As a main player, after you reveal an attack card in an encounter, use this power to multiply the number of ships you have in the encounter times the value of your card instead of adding. Your allies' ships are still added to your total as usual.",
  //     "level": "expert",
  //     "wild": "As a main player you may multiply the number of ships you have in the encounter by the number of ships allied with you instead of adding them.",
  //     "super": "You may multiply the total of all ships on your side by your attack card when using your power, not just your own.",
  //     "history": "Able to multiply rapidly in the presence of other life forms, the Virus soon overwhelmed its own planets and now waits for opportunities to proliferate throughout the Universe.",
  //     "summary": "Mutiplies in Attack",
  //     "xpac": "base"
  //   }
  // ];
})

.controller('AlienCtrl', function($scope, alien) {
  $scope.alien = alien;
});
