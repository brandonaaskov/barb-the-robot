var gulp = require('gulp')
var exec = require('child_process').exec

gulp.task('deploy', function () {
  exec('git push heroku master', function (error, stdout, stderr) {
    if (error) console.log('error', error)
    if (stdout) console.log(stdout)
    if (stderr) console.log(stderr)
  })
})
