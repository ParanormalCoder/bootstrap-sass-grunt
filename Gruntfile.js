module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'src/vendor/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'dist/css/style.css': 'src/style/style.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'src/vendor/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'dist/css/style.css': 'src/style/style.scss'
                }
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/vendor/bootstrap-sass/assets/javascripts/',
                    src: ['bootstrap.js'],
                    dest: 'dist/js/'
                }, {
                    expand: true,
                    cwd: 'src/vendor/jquery/dist/',
                    src: ['jquery.js'],
                    dest: 'dist/js/'
                }, {
                    expand: true,
                    cwd: 'src/script/',
                    src: ['*.js'],
                    dest: 'dist/js/'
                }]
            },
            'srcToDist': {
                files: [{
                    expand: true,
                    cwd: 'src/vendor/bootstrap-sass/assets/javascripts/',
                    src: ['bootstrap.min.js'],
                    dest: 'dist/js/'
                }, {
                    expand: true,
                    cwd: 'src/vendor/jquery/dist/',
                    src: ['jquery.min.js'],
                    dest: 'dist/js/'
                }]
            },
            'distToTmp': {
                files: [{
                    expand: true,
                    cwd: 'dist/js/',
                    src: ['*.*'],
                    dest: 'tmp/'
                }]
            }
        },
        uglify: {
            scripts: {
                files: {
                    'dist/js/script.min.js': ['src/script/script.js']
                }
            }
        },
        clean: {
            'distCss': ['dist/css'],
            'distJs': ['dist/js'],
            'tmp': ['tmp'],
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['tmp/jquery.min.js', 'tmp/bootstrap.min.js', 'tmp/script.min.js'],
                dest: 'dist/js/bundle.js',
            }
        },
        watch: {
            styles: {
                files: 'src/style/*.scss',
                tasks: ['sass:dev']
            },
            scripts: {
                files: 'src/scripts/*.*',
                tasks: ['copy:dev:script']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['clean:distJs', 'clean:distJs', 'clean:tmp', 'sass:dev', 'copy:dev', 'watch']);
    grunt.registerTask('dist', ['clean:distJs', 'clean:distJs', 'clean:tmp', 'sass:dist', 'copy:srcToDist', 'uglify', 'copy:distToTmp', 'clean:distJs', 'concat', 'clean:tmp']);
};
