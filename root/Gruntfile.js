module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        koko: {
            dev: {
                openPath: '/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-koko');

    grunt.registerTask('server', ['koko:dev']);
    grunt.registerTask('default', ['server']);
};