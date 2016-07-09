'use strict';

var poststylus = require('poststylus');
var browserSync = require('browser-sync');
var axis = require('axis');

var postcss = function() {
  return require('poststylus')(['autoprefixer', 'lost']);
};

function setEnv() {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV;
  } else {
    return 'dev';
  }
}

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.task.loadTasks('./grunt');

  grunt.initConfig({
    destinations: {
      app: 'app',
      build: 'build'
    },

    env: setEnv(),

    watch: {
      options: {
        spawn: false
      },
      stylus: {
        files: ['<%= destinations.app %>/styl/**/*', '<%= destinations.app %>/css/**/*'],
        tasks: ['stylus:build', 'copy:css', 'bs-inject-css']
      },
      assets: {
        files: ['<%= destinations.app %>/assets/**/*'],
        tasks: ['copy:build', 'bs-reload']
      },
      babel: {
        files: ['<%= destinations.app %>/jsx/**/*'],
        tasks: ['clean:babel', 'babel:build', 'webpack:build', 'bs-inject-js']
      },
      pug: {
        files: ['<%= destinations.app %>/pug/**/*.pug'],
        tasks: ['pug:build', 'bs-reload']
      }
    },

    pug: {
      build: {
        options: {
          data: {
            debug: true
          }
        },
        files: [
          { src: '<%= destinations.app %>/pug/index.pug', dest: '<%= destinations.build %>/index.html' }
        ]
      }
    },

    clean: {
      build: ['<%= destinations.build %>/**/*'],
      babel: [
        '<%= destinations.app %>/js/*.js',
        '<%= destinations.app %>/js/*.map'
      ]
    },

    copy: {
      build: {
        files: [
          { src: '<%= destinations.app %>/assets/**', dest: '<%= destinations.build %>/assets' }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            cwd: '<%= destinations.app %>/css/',
            src: '**/*',
            dest: '<%= destinations.build %>/css/'
          }
        ]
      }
    },

    stylus: {
      build: {
        options: {
          use: [ postcss ]
        },
        files: {
          '<%= destinations.build %>/css/style.css': [
            '<%= destinations.app %>/styl/main.styl'
          ]
        }
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'react']
      },
      build: {
        files: [
          {
            expand: true,
            cwd: '<%= destinations.app %>/jsx/',
            src: ['**/*.jsx', '**/*.js'],
            dest: '<%= destinations.app %>/js/',
            ext: '.js'
          }
        ]
      },
      src: {
        files: [
          {
            expand: true,
            cwd: '<%= destinations.src %>/',
            src: '*.js',
            dest: '<%= destinations.build %>/'
          }
        ]
      }
    },

    webpack: {
      build: {
        entry: {
          site: './<%= destinations.app %>/js/index.js'
        },
        output: {
          path: './<%= destinations.build %>/js',
          filename: 'bundle.js'
        },
        module: {
          loaders: [
            { test: /\.json$/, loader: 'json' }
          ]
        },
        resolve: {
          alias: {}
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        }
      }
    }

  });

  grunt.registerTask('bs-init', function () {
    var done = this.async();
    browserSync({
      open: 'ui',
      logLevel:'debug',
      timestamps: false,
      server: {
        baseDir: 'build'
      }
    }, function (err, bs) {
      done();
    });
  });

  grunt.registerTask('bs-reload', function () {
    browserSync.reload();
  });

  grunt.registerTask('bs-inject-js', function () {
    browserSync.reload([
      'js/*.js'
    ]);
  });

  grunt.registerTask('bs-inject-css', function () {
    browserSync.reload([
      'css/*.css'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.task.run([
      'build:build',
      'bs-init',
      'watch'
    ]);
  });

  grunt.registerTask('build', function(target) {
    grunt.task.run([
      'clean:' + target,
      'clean:babel',
      'pug:' + target,
      'stylus:' + target,
      'babel',
      'webpack',
      'copy'
    ]);
  });

  grunt.registerTask('default', [
    'server'
  ]);

};
