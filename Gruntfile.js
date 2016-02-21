module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['public/app/app.js', 'public/app/collections/Tweets.js', 'public/app/models/TweetModel.js', 'public/app/views/ProfileView.js', 'public/app/views/SearchView.js', 'public/app/views/TweetListView.js'],
        dest: 'dist/built.js',
      }
    },
    jshint: {
      beforeconcat: ['public/app/app.js', 'public/app/collections/Tweets.js', 'public/app/models/TweetModel.js', 'public/app/views/ProfileView.js', 'public/app/views/SearchView.js', 'public/app/views/TweetListView.js'],
      afterconcat: ['dist/built.js']
    },
    uglify: {
      my_target: {
        files: {
          'public/dist/app.min.js': ['dist/built.js']
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'jshint', 'uglify']);

};
