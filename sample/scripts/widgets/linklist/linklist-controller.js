angular.module('sample.widgets.linklist')
.controller('linklistCtrl', function ($scope, config) {
  if (!config.links) {
    config.links = [];
  }
  $scope.links = config.links;
}).controller('linklistEditCtrl', function ($scope) {
  function getLinks() {
    if (!$scope.config.links) {
      $scope.config.links = [];
    }
    return $scope.config.links;
  }
  $scope.addLink = function () {
    getLinks().push({});
  };
  $scope.removeLink = function (index) {
    getLinks().splice(index, 1);
  };
})