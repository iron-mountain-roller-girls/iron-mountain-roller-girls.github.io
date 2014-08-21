var fs = require('fs');

var date = new Date();
var time = date.getTime();

date.setDate(date.getDate() + 90);

var expires = date.toUTCString();

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('grunt-aws.json'),
        clean: ['build', 'dist'],
        time: time,
        concat: {
            // css: {
            //     options: {
            //         separator: ' '
            //     },
            //     src: ['css/style.css', 'css/fontello.css', 'css/animations.css', 'css/magnific-popup.css', 'css/jquery.bxslider.css'],
            //     dest: 'build/<%= pkg.name %>.css'
            // },
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'js/twitterFetcher_v10_min.js',
                    'js/scriptbreaker-multiple-accordion-1.js',
                    'js/jquery.easing.1.3.js',
                    'js/jquery.backgroundpos.min.js',
                    'js/jquery.fitvids.js',
                    'js/instafeed.min.js',
                    'js/jquery.nicescroll.js',
                    'js/jquery.bxslider.min.js',
                    'js/interstellar.js',
                    'js/jquery.appear.js',
                    'js/easyResponsiveTabs.js',
                    'js/custom.js',
                    'js/jquery.isotope.min.js',
                    'js/portfolio_init.js',
                    'js/masonry_init.js'
                ],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= time %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.<%= time %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },
        // cssmin: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        //     },
        //     css: {
        //         src: '<%= concat.css.dest %>',
        //         dest: 'dist/<%= pkg.name %>.<%= time %>.min.css'
        //     }
        // },
        's3-sync': {
            options: {
                key: '<%= aws.key %>',
                secret: '<%= aws.secret %>',
                bucket: '<%= aws.bucket %>',
                headers: {
                    'Content-Encoding': 'gzip',
                    'Expires': expires
                }
            },
            your_target: {
                files: [{
                    root: __dirname,
                    src: 'dist/*',
                    dest: 'imrg-dist/',
                    gzip: true
                }]
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-s3-sync');

    grunt.registerTask('update-cache-bust', 'Update the cache busting file', function() {
        var done = this.async();

        fs.writeFile("_data/assets.yml", 'asset_time: '+grunt.config('time'), function(err) {
            if(err) {
                grunt.log.writeln(err);
            } else {
                grunt.log.writeln(grunt.config('time')+" Added to config");
            }

            done();
        });
    });

    // Default task(s).
    //grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'uglify', 's3-sync', 'update-cache-bust']);
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 's3-sync', 'update-cache-bust']);

};
