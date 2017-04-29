'use strict';

angular.module('ngWriter.version', [
  'ngWriter.version.interpolate-filter',
  'ngWriter.version.version-directive'
])

.value('version', '0.1');
