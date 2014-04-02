/* global module:true */
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    dirs: {
      js: 'js',
      css: 'css',
      img: 'img',
      sass: 'sass',
      vendor: 'js/vendor'
    },

    pkg: grunt.file.readJSON( 'package.json' ),

    clean: {
      dist: 'dist'
    },

    // concat: {
    //   dist: {
    //     src: [
    //       'src/<%= dirs.js %>/buddycloud-styles.js',
    //       'src/<%= dirs.js %>/vendor/highlight.min.js'
    //     ],
    //     dest: 'src/<%= dirs.js %>/buddycloud-styles.js'
    //   }
    // },

    uglify: {
      options: {
        mangle: true,
        compress: true
      },
      target: {
        files: {
          'dist/<%= dirs.js %>/buddycloud-styles.min.js': [
            'src/<%= dirs.js %>/buddycloud-styles.js',
            'src/<%= dirs.js %>/vendor/highlight.min.js'
          ]
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/<%= dirs.sass %>',
          cssDir: 'dist/<%= dirs.css %>',
          imagesDir: 'src/<%= dirs.img %>',
          relativeAssets: true,
          outputStyle: 'expanded'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'src/sass/**/*',
        tasks: [
          'compass:dev'
        ]
      },
      js: {
        files: [
          'src/<%= dirs.js %>/plugins.js',
          'src/<%= dirs.js %>/main.js'
        ],
        tasks: [
          'concat'
        ]
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'dist/'
          }
        ]
      }
    }

  });

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'compass:dev',
    'cssmin',
    // 'concat',
    'uglify',
  ]);

};
