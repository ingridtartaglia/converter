var converter = angular.module("converter", []);

converter.controller("converterCtrl", function($scope){
    $scope.convertFrom = 0;
    $scope.convertTo = 0;

    $scope.convertValueTo = function(){
        if ($scope.convertType == 1) {
            $scope.convertTo = Math.round(($scope.convertFrom * 1.8 + 32) * 100) / 100;
        }
        if ($scope.convertType == 2) {
            $scope.convertTo = Math.round(($scope.convertFrom / 1.609) * 100) / 100;
        }
        if ($scope.convertType == 3) {
            $scope.convertTo = Math.round(($scope.convertFrom * 2.204) * 100) / 100;
        }
        if ($scope.convertType == 4) {
             $scope.convertTo = Math.round(($scope.convertFrom * 0.032) * 100) / 100;
        }
        if ($scope.convertType == 5) {
             $scope.convertTo = Math.round(($scope.convertFrom * 33.814) * 100) / 100;
        }
    };

    $scope.convertValueFrom = function(){
        if ($scope.convertType == 1) {
            $scope.convertFrom = Math.round((($scope.convertTo - 32) * (5/9)) * 100) / 100;
        }
        if ($scope.convertType == 2) {
            $scope.convertFrom = Math.round(($scope.convertTo * 1.609) * 100) / 100;
        }
        if ($scope.convertType == 3) {
            $scope.convertFrom = Math.round(($scope.convertTo / 2.204) * 100) / 100;
        }
        if ($scope.convertType == 4) {
            $scope.convertFrom = Math.round(($scope.convertTo * 30.48) * 100) / 100;
        }
        if ($scope.convertType == 5) {
            $scope.convertFrom = Math.round(($scope.convertTo / 33.814) * 100) / 100;
        }
    };
});
