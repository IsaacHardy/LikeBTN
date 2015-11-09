

let MyController = function ($scope) {
  $scope.num = 0;
  $scope.like = 'likes';

  $scope.addTask = function () {
    $scope.num = $scope.num + 1;

    if ($scope.num === 0) {
      $scope.like = 'likes';
    } else if ($scope.num === 1) {
      $scope.like = 'like';
    } else {
      $scope.like = 'likes';
    }

  };

};

MyController.$inject = ['$scope'];

export default MyController;