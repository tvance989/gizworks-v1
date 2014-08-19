//You may have already done this, but Linkchecker is a Python package, so use pip or easy-install to nab it

module.exports = function(grunt){

        [
            'grunt-cafe-mocha',
            'grunt-contrib-jshint',
            'grunt-exec',
        ].forEach(function(task){
              grunt.loadNpmTasks(task);
        });

        grunt.initConfig({
                cafemocha: {
                        all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
                },
                jshint: {
                        app: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
                },
                exec: {
                        linkchecker:
                            { cmd: 'linkchecker http://localhost:3000' }
                },
        });

        grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
