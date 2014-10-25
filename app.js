console.log('hey');

angular.module('app', [])

.constant('sendHubApi', 'https://api.sendhub.com/v1')
.constant('username', '4088898744')
.constant('apiKey', '5be780e4dd524d1815d388eceaaf752f2f94380d')

.config(['$httpProvider', function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

.controller('MainController', ['$http', '$scope', 'sendHubApi', 'username', 'apiKey', function($http, $scope, sendHubApi, username, apiKey) {

  // Add Contact
  $scope.addContact = function(name, phoneNumber) {
    // POST request with name and phoneNumber
  };

  // Contacts
  $scope.contacts = [];

  $scope.getContacts = function() {
    // GET request
    $http({
      method: 'GET',
      url: sendHubApi+'/contacts/?username='+username+'&api_key='+apiKey,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).success(function(data) {
      console.log('getContacts data', data);
    }).error(function(error) {
      alert('Error:', error);
    });
  };

  $scope.selectRecipient = function(recipientNumber) {
    $scope.recipient = recipientNumber;
  };

  // Send Message
  $scope.recipient;

  $scope.sendMessage = function(message) {
    // POST request with recipient and message
  };

}])

;