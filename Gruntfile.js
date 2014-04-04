module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			all: {
				src: './public/index.less',
				dest: './public/distrib.css'
			}
		},
		watch: {
			files: "**/*.less",
			tasks: ["less"]
		},
		server : {
			base: './public',
			port : 8000
		}
	});

	grunt.registerTask('server', 'Start a custom web server', function() {
		grunt.log.writeln('Started web server on port 8000');
		require('./app.js').listen(8000);
	});



	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default','watch');

};
