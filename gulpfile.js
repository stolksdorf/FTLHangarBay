var gulp = require('gulp');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var browserify = require('browserify');

var server;

.task
.watch
.src
.dest




gulp.task('server', function(){
	console.log('restarting');
	server = require('./server');
	server.restart();
});

gulp.task('html', function(){
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('./public'))
})

gulp.task('styles', function(){
	gulp.src('src/ftlhb.less')
		.pipe(less({
			compress : true,
			sourceMap : true
		}))
		.pipe(gulp.dest('./public'));
});

gulp.task('scripts', function() {
	gulp.src('src/ftlhb.js')
		.pipe(browserify({
			debug : true
		}))
		.pipe(gulp.dest('./public'))
});

gulp.task('assets', function(){

})


gulp.task('watch', function(){
	gulp.watch('src/**/*.less', ['styles']);
	gulp.watch('src/**/*.js', ['scripts']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('server.js', ['server']);
});

gulp.task('build', ['html', 'styles', 'scripts'])

gulp.task('default', ['build', 'server', 'watch'])




gulp.task('temp', function(){
	browserify({
		entries : './helloworld.jsx',
		extensions : ['jsx']
	})
		.transform(['brfs', 'reactify'])
		.bundle()
		//Pass desired output filename to vinyl-source-stream
		.pipe(source('bundle.js'))
		// Start piping stream to tasks!
		.pipe(gulp.dest('./build/'));
})