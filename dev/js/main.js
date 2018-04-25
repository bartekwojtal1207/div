var DIVANTE = {};

jQuery(document).ready(function ($) {

    $.extend(window.DIVANTE, {

        init: function (selector) {
            DIVANTE.zad1('body');
            DIVANTE.zad2('body');
            DIVANTE.zad3('body');
        },

        zad1: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad2: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad3: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        }

});

DIVANTE.init();

});