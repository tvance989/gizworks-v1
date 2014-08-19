var fortune = require('../../lib/gallery.js');
var expect = require('chai').expect;

suite('Gallery tests', function(){
    test('getProjects() should return the projects', function(){
        expect(gallery.getProjects().isArray);
    });
});
