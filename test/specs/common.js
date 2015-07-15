var map = {
    day: 'date',
    month: 'month',
    year: 'year',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds',
    ampm: ''
};

var counts = {
    day: 31,
    month: 12,
    year: $.fn.combodate.defaults.maxYear - $.fn.combodate.defaults.minYear + 1,
    hour: 24,
    minute: 60 / $.fn.combodate.defaults.minuteStep,
    second: 60,
    millisecond: 1000,
    ampm: 2
};

var f24 = 'DD-MM-YYYY HH:mm:ss:SSS';
var vf24 = 'DD / MM / YYYY H : mm : ss : SSS';
var f12 = 'DD-MM-YYYY hh:mm:ss:SSS A';
var vf12 = 'DD MM YYYY h : mm : ss : SSS a';

// uncommnet for running single test
// see: https://stackoverflow.com/a/26699963/740245
//var ttest = test;
//test = function() {};