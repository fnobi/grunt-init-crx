module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['compass:dev']
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    config: 'config.rb',
                    environment: 'development'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('build', ['compass:dev']);
    grunt.registerTask('default', ['build']);
};