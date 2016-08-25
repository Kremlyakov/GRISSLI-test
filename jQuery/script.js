"use strict";

var yes = function () {
    $('.check-simple span').text("Да");
};

var no = function () {
    $('.check-simple span').text('Нет');
};

$('body').on('keyup', '.check-simple input', function (event) {
    $('.check-simple span').text('');

    var $input = $(event.target);
    var number = $input.val();

    var pattern = /^\d*$/;

    if (!pattern.test(number) || !number.length) {
        $input.val(number.slice(0, -1));
    }

    check(number, yes, no);
});
