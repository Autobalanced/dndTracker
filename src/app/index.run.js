(function() {
  'use strict';

  angular
    .module('dndtracker')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
