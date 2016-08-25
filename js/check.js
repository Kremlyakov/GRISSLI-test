"use strict";

var check = function (number, yes, no) {

    if ('function' != typeof yes) {
        yes = function () {}
    }
    if ('function' != typeof no) {
        no = function () {}
    }

    if (3 >= number) {
        yes();
        return false;
    }

    if (0 == number % 2) {
        no();
        return false;
    }

    for (var i = 3; i < number; i += 2) {
        if (0 == number % i) {
            no();
            return false;
        }
    }

    yes();
};