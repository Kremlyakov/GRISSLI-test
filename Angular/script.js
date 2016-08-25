"use strict";

angular.module('checkSimple', [])

.controller('CheckController', function ($scope) {

    $scope.message = '';

    var yes = function () {
        $scope.message = 'Да';
    };

    var no = function () {
        $scope.message = 'Нет';
    };

    $scope.check = function (number) {
        $scope.message = '';

        var pattern = /^\d*$/;

        if (!pattern.test(number) || !number.length) {
            $scope.number = number.slice(0, -1);
            return false;
        }

        check(number, yes, no);
    }
});