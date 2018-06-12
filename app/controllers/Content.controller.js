'use strict';

angular.module('TwitterApplication')
  .controller('contentCtrl', function($scope, $http, SearchService, $rootScope) {
    console.log("Content controller has loaded successfully");

    $scope.deleteTweet = function(id) {
      $rootScope.obj.tweets = $rootScope.obj.tweets.filter(function (obj) {
        return obj.id != +id;
      })
    };

});