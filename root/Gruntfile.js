module.exports = function(grunt) {
    var connect = require('connect');
    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            build: {
                options: {
                    out: 'dist/scripts.js',
                    mainConfigFile: 'src/js/bootstrap.js',
                    name: 'bootstrap',
                    include: ['almond'],
                    wrap: true,
                    paths: {
                        almond: path.resolve('src/components/almond/almond'),
                    }
                }
            }
        },
        less: {
            build: {
                options: {
                    yuicompress: true,
                    paths: ['src']
                },
                files: {
                    './dist/styles.css': './src/less/styles.less'
                }
            }
        },
        copy: {
            build: {
                files: [
                    {src: './src/index.html', dest: './dist/index.html'}
                ]
            }
        },
        preprocess: {
            build: {
                src: './dist/index.html',
                options: {
                    inline: true,
                    context: {
                        build: true
                    }
                }
            }
        },
        'gh-pages': {
            options: {
                base: 'dist'
            },
            src: ['**']
        }
    });

    grunt.registerTask('runserver', 'Start the development server.', function(port) {
        this.async();
        port = port || 8000;

        connect()
            .use(connect.static('src'))
            .use(connect.directory('src', {icons: true}))
            .use(connect.logger())
            .listen(port)
            .on('listening', function() {
                grunt.log.writeln('Starting static web server on port ' + port + '.');
            })
            .on('error', function(err) {
                if (err.code === 'EADDRINUSE') {
                    grunt.fatal('Port ' + port + ' is already in use by another process.');
                } else {
                    grunt.fatal(err);
                }
            });
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.registerTask('build', ['requirejs:build', 'less:build', 'copy:build', 'preprocess:build']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
    grunt.registerTask('default', ['runserver']);
};
