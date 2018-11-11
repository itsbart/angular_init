(function () {
  'use strict';

  function AppContainerCtrl($scope, _) {
    var ctrl = this;
  }

  angular
    .module('starterApp')
    .component('appContainerComponent', {
      templateUrl: 'components/app-container/app-container.html',
      controller: AppContainerCtrl
    });
})();