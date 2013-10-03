module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // https://npmjs.org/package/grunt-contrib-jade
    // https://github.com/gruntjs/grunt-contrib-jade
    jade: {
      html: {
        files: {
          'index.html': ['jade/index.jade']
        },
        options: {
          client: false,
          pretty: true, 
          //data: grunt.file.readJSON("data.json")
        }
      },
    },
    
    compass: {
      dist: {
        options: {
          sassDir: 'compass/sass',
          cssDir: 'css',
        }
      },
    },

    // https://npmjs.org/package/grunt-contrib-watch
    watch: {
      compass: {
        files: ['compass/sass/**/*.scss'],
        tasks: ['compass']
      }, 

      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade']
      }    
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['watch']);
  
};