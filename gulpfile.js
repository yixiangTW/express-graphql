const gulp = require('gulp');

const { exec } = require('child_process')

gulp.task('default', function(done) {

  // 执行命令
  exec(`cd './package/graphql' && npm run server &`);
  exec(`cd './package/launchpad' && npm run dev &`);
  done()
});
