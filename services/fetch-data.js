/**
 * @author b.karmilowicz
 */
(function () {
  'use strict';

  function dataFetcher($http, $q) {
    return {
      sayHello: function () {
        return 'hello world';
      },
      fetchRedditData : function () {
        return $http({
          method: 'GET',
          url: 'https://www.reddit.com/r/ethtrader.json'
        }).then(function success(response) {
          return response;
        }, function error(error) {
          return $q.reject(error);
        });
      },
      // enqueue: function (selection) {
      //   return $http({
      //     method: 'POST',
      //     url: '...URL',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     data: selection
      //   }).then(function callback(response) {
      //     return response;
      //   });
      // },
    }
  }

  angular
    .module('starterApp')
    .service('dataFetcher', dataFetcher);
})();