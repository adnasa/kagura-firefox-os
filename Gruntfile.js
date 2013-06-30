
module.exports = function(grunt) {
  var basePathComponents = 'components/';

  // Configuration.
  grunt.initConfig({
    // less: {
    //   development : {
    //     options : {
    //       compress: true,
    //       paths: ['components/bootstrap/less', 'app/local/less']
    //     },
    //     files :{
    //       // string|Array type of structure.
    //       'app/local/css/style.css' : ['app/local/less/style.less']
    //     }
    //   }
    // },
    stylus: {
      // Setting this as the default task for now.
      development : {
        options : {
          compress: true,
          paths: ['components/bootstrap-stylus/stylus'],
          // use : [
          //   require('fluidity')
          // ],
          import: ['variables', 'mixins', 'reset']
        },
        files : {
          'app/local/css/style.css' : 'app/local/stylus/style.styl'
        }
      }
    },
    watch : {
      styles : {
        files : 'app/local/stylus/style.styl',
        tasks : ['stylus:monkey'],
      },
      options : {
        livereload : true
      }
    }
  }); // Configuration end.
  
  // Use less compiler.
  // grunt.loadNpmTasks('grunt-contrib-less');

  // Use stylus compiler.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register default tasks.
  grunt.registerTask('default', ['watch']);
}
