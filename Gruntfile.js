module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      options: {
        bare: true
      },
      scripts: {
        expand: true,
        flatten: true,
        cwd: 'coffee',
        src:['*.coffee'],
        dest: 'js/',
        ext: '.js'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['coffee/*.coffee'],
        tasks: ['newer:coffee']
      }
    },
    concat_css: {
        options: {
          // Task-specific options go here.
        },
        all: {
          src: ["stylesheets/*.css"],
          dest: "production/css/styles.css"
        },
    },
    concat: {
        dist: {
            src: [
                'js/*.js'
            ],
            dest: 'production/js/main.js',
        }
    }, 
    uglify: {
        build: {
            src: 'production/js/main.js',
            dest: 'production/js/main.min.js'
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'production/img/'
            }]
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
};
