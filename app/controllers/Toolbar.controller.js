'use strict';

angular.module("TwitterApplication")
  .controller('toolbarCtrl', ['$scope', 'SearchService', '$rootScope', function($scope, SearchService, $rootScope) {
    console.log("Toolbar controller has loaded successfully");

    $scope.searchLine = '';
    $rootScope.obj = {
      tweets: [],
      queryHasError: true
    };

    $scope.getTweets = function(query) {
      SearchService.search(query).then(function(response) {
        $rootScope.obj.queryHasError = false;
        $rootScope.obj.tweets = response.statuses;
        if ($rootScope.obj.tweets) {
          $rootScope.obj.tweets.forEach(function(item) {
          var customFormat = 'YYYY-MM-DD HH:mm:ss';
          var TWITTER_DATETIME = 'ddd MMM DD HH:mm:ss +ZZ YYYY';
          var result = moment(item.created_at, TWITTER_DATETIME, 'en').format(customFormat); //invalid date
          item.created_at = result;
          });
        }
        $rootScope.$apply();
      }, function(errors) {
        $rootScope.obj.queryHasError = true;
        $rootScope.$apply();
      });
    };

    $scope.$watch('searchLine', function() {
      $scope.getTweets($scope.searchLine);
    });

  }])