module.exports = function (grunt) {

  // Configure main project settings
  grunt.initConfig({

    // Basic settings and info about plugins
    pkg: grunt.file.readJSON('package.json'),

    // Name of plugin (plugin name without the "grunt-contrib-")
    cssmin: { // Begin CSS Minify Plugin
      
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Do the task
  grunt.registerTask('default', ['cssmin']);
};
