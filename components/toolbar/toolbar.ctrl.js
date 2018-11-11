/**
 * @author Bart
 */

(function () {
  'use strict';

  function ToolbarCtrl($scope, dataFetcher, _) {
    var ctrl = this;
    ctrl.name = dataFetcher.sayHello();

    function getData() {
      dataFetcher.fetchRedditData().then(function (response) {
        console.log(response);
        var data = response.data.data.children;
        _.forEach(data, function (item) {
          console.log(item.data.title);
        });
      }, function (error) {
        console.log(error);
      });
    }

    //getData();
  }

  angular
    .module('starterApp')
    .component('toolbarComponent', {
      templateUrl: 'components/toolbar/toolbar.html',
      controller: ToolbarCtrl
    });

})();