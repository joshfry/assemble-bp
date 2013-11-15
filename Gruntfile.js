module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    bower: grunt.file.readJSON('.bowerrc'),
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('src/templates/data/site.yml'),

    connect: {
      options: {
        port: '<%= site.port %>',
      },
      server: {
        options: {
          base: '<%= site.dev %>/'
        }
      },
      prod: {
        options: {
          base: '<%= site.prod %>/',
          keepalive: true
        }
      }
    },

    watch: {
      html: {
        files: ['src/**/**.{hbs,md}'],
        tasks: ['html']
      },
      scss: {
        files: ['src/scss/**/*.scss'],
        tasks: ['scss']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['clean:js', 'js']
      },
      img: {
        files: ['src/img/**'],
        tasks: ['clean:img', 'img']
      },
      data: {
        files: ['<%= site.assemble %>/data/**'],
        tasks: ['html']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= site.dev %>/**/*.html',
          '<%= site.dev %>/<%= site.assets %>/css/{,*/}*.css',
          '<%= site.dev %>/<%= site.assets %>/js/{,*/}*.js'
        ]
      }
    },

    sass: {
      build: {
        files : [
          {
            '<%= site.dev %>/<%= site.assets %>/css/style.css': 'src/scss/style.scss'
          }
        ],
        options : {
          style : 'expanded'
          // debugInfo: true
        }
      }
    },

    concat: {
      components: {
        src: ['src/js/components/*.js'],
        dest: '<%= site.dev %>/<%= site.assets %>/js/components.cat.js',
        options: {
          banner: '/*! \n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/ \n\n',
        }
      }
    },

    jshint: {
      beforeconcat: ['src/js/components/*.js', 'Gruntfile.js'],
      afterconcat: ['<%= site.prod %>/assets/js/scripts.min.js']
    },

    assemble: {
      options: {
        flatten: true,
        data: '<%= site.assemble %>/data/**/*.{json,yml}',
        assets: '<%= site.dev %>/<%= site.assets %>',
        helpers: '<%= site.assemble %>/helpers/*.js',
        layoutdir: '<%= site.assemble %>/layouts',
        layout: 'default.hbs',
        partials: ['<%= site.assemble %>/pages/**/*.hbs','<%= site.assemble %>/partials/**/*.hbs'],
        plugins: ['permalinks'],
        permalinks: {
          structure: ':basename/index.html'
        }
      },
      pages: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: '<%= site.assemble %>/pages',
            src: ['**/*.hbs'],
            dest: '<%= site.dev %>/'
          }
        ]
      }
    },

    clean: {
      dist: ['<%= site.dev %>'],
      build: ['<%= site.prod %>'],
      bower: ['<%= site.bower %>'],
      html: ['<%= site.dev %>/**/*.{html,md}', '!<%= site.bower %>/**/*.{html,md}'],
      css: ['<%= site.dev %>/<%= site.assets %>/css'],
      js: ['<%= site.dev %>/<%= site.assets %>/js'],
      img: ['<%= site.dev %>/<%= site.assets %>/img']
    },

    copy: {
      bower: {
        files: [
          {
            expand: true,
            cwd: '<%= bower.directory %>',
            src: ['**/*'],
            dest: '<%= site.bower %>'
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            cwd: 'src/js',
            src: ['**/*.{js,css}'],
            dest: '<%= site.dev %>/<%= site.assets %>/js'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src/img',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= site.dev %>/<%= site.assets %>/img'
          }
        ]
      },
      iconfont: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= site.bower %>/mfglabs-iconset/css/font/*'],
            dest: '<%= site.dev %>/<%= site.assets %>/css/font'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: '<%= site.dev %>',
            src: ['**', '!assets/bower/**'],
            dest: '<%= site.prod %>'
          }
        ]
      }
    },

    // I removed this because it was slowing down other tasks
    //
    // https://github.com/gruntjs/grunt-contrib-imagemin
    //
    // devDependencies:
    // "grunt-contrib-imagemin": "~0.3.0",
    //
    // imagemin: {
    //   build: {
    //     options: {
    //       optimizationLevel: 3
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= site.dev %>/<%= site.assets %>/img/',
    //       src: ['**/*.{png,jpg,gif}'],
    //       dest: '<%= site.dev %>/<%= site.assets %>/img/'
    //     }]
    //   }
    // },

    useminPrepare: {
      html: ['<%= site.dev %>/**/*.html', '!<%= site.bower %>/**/*.html'],
    },
    usemin: {
      html: ['<%= site.dev %>/**/*.html', '!<%= site.bower %>/**/*.html'],
      options: {
        dirs: ['<%= site.dev %>/']
      }
    },

    devcode : {
      options : {
        html: true,
        clean: true,
        block: {
          open: 'devcode',
          close: 'endcode'
        },
        dest: '<%= site.dev %>'
      },
      prod : {
        options: {
          source: '<%= site.dev %>/',
          dest: '<%= site.dev %>/',
          env: 'production'
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['assets', 'assemble']);

  // Main tasks
  grunt.registerTask('dev',     ['default', 'w']);
  grunt.registerTask('build',   ['default', 'prod']);

  // Watch tasks
  grunt.registerTask('w',       ['connect:server', 'watch']);
  grunt.registerTask('s',       ['connect:server:keepalive:true']);
  grunt.registerTask('p',       ['connect:prod']);

  // Compile tasks (dev)
  grunt.registerTask('assets',  ['clean', 'bower', 'sass', 'js', 'img']);
  grunt.registerTask('bower',   ['copy:bower']);
  grunt.registerTask('html',    ['assemble']);
  grunt.registerTask('scss',    ['sass']);
  grunt.registerTask('js',      ['jshint:beforeconcat', 'concat', 'copy:js']);
  grunt.registerTask('img',     ['copy:img']);

  // Compile tasks (prod)
  grunt.registerTask('prod',    [/*'imagemin', */'copy:iconfont', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin', 'devcode', 'copy:prod', 'clean:dist']);
  // Plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('assemble');
};
