'use strict';

angular.module('search')
  .service('SearchService', [
    function() {
      console.log('SearchService was loaded successfully');

      var self = this;
      var consumerKey = '6RSiz4ldcmRH3iF0hN9D8tSLZ';
      var secretConsumerKey ='1scOCqcd3Bs2bdCehoGP2FqL7Zf0gEoF2hO4kWWx50IQtfrNhi';
      var token = '841990496-obFnFC8DyiCXd4gDjK4g5031ceJoPhRbg8xWXlg7';
      var secretToken = 'iyh086js9tZAQclaanMzFvdQVUZqbJZ9MD1mNlNAah8EY';

      self.search = function(text) {
        var promise = new Promise(function(success, reject) {
          var cb = new Codebird;
          cb.setConsumerKey('6RSiz4ldcmRH3iF0hN9D8tSLZ', '1scOCqcd3Bs2bdCehoGP2FqL7Zf0gEoF2hO4kWWx50IQtfrNhi');
          cb.setToken('841990496-obFnFC8DyiCXd4gDjK4g5031ceJoPhRbg8xWXlg7', 'iyh086js9tZAQclaanMzFvdQVUZqbJZ9MD1mNlNAah8EY');
          var params = {
              q: text,
              src: 'typd'
          };
          cb.__call(
            "search_tweets",
            params, function(data) {
              (data.httpstatus && data.httpstatus == 200) ? success(data) : reject(data);
            });
        });
        return promise;
      };
}]);