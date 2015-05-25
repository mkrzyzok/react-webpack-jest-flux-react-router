'use strict';


module.exports = function (grunt) {


  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  //loads the various task configuration files
  var options = {
    config : {
      src: "config/grunt_tasks/*.json"
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);



  grunt.registerTask('default', ['watch']);


};
