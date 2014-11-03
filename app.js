console.log('hey');

// $(function() {
//   $.ajax({
//     url: 'https://api.sendhub.com/v1/contacts/?username=4088898744&api_key=5be780e4dd524d1815d388eceaaf752f2f94380d',
//     type: 'GET',
//     dataType: 'jsonp',
//     success: function(data) {
//       console.log('success data:', data);
//     },
//     error: function(error) {
//       alert('sorry error', error);
//     }
//   });
// });

angular.module('app', [])

.constant('sendHubApi', 'https://api.sendhub.com/v1')
.constant('username', '4088898744')
.constant('apiKey', '5be780e4dd524d1815d388eceaaf752f2f94380d')

.controller('MainController', ['$http', '$scope', 'sendHubApi', 'username', 'apiKey', function($http, $scope, sendHubApi, username, apiKey) {

  // Add Contact
  $scope.addContact = function(name, phoneNumber) {
    // POST request with name and phoneNumber
    $http.post('https://api.sendhub.com/v1/contacts/?username='+username+'&api_key='+apiKey,
      {
        "name": name,
        "number": phoneNumber
      }
    ).success(function(data) {
      console.log('data', data);
    }).error(function(error) {
      alert('Error\n', error);
    });
  };

  // Contacts
  $scope.contacts = [];

  $scope.getContacts = function() {
    var url = 'https://api.sendhub.com/v1/contacts/?username=4088898744&api_key=5be780e4dd524d1815d388eceaaf752f2f94380d&callback=JSON_CALLBACK'

    $http.jsonp(url)
      .success(function(data) {
        console.log('success', data);
      }).error(function(error) {
        console.log('error', error);
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