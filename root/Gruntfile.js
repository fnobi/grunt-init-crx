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
        },
        koko: {
            dev: {
                openPath: '/popup.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-koko');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('server', ['koko:dev']);
    grunt.registerTask('build', ['compass:dev']);
    grunt.registerTask('default', ['build']);
};