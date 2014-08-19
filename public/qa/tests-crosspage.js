var Browser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Cross-Page tests', function(){
    setup(function(){
        browser = new Browser();
    });

    test('requesting an order form from the gallery should populate the referrer field', function(){
        var referrer = 'http://localhost:3000/gallery';
        browser.visit(referrer, function(){
            assert(browser.field('referrer').value===referrer);
            done();
        });
    });

    test('visiting the "order form" page directly should result in an empty referrer field', function(){
        browser.visit('http://localhost:3000/order', function(){
            assert(browser.field('referrer').value==='');
            done();
        });
    });
});
