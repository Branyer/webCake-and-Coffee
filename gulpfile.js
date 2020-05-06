const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('less', () =>{
    return gulp.src('less/styles.less')
        .pipe(autoprefixer ({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(less({
            includePath: ['less']
        }))
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', gulp.series('less', ()=>{
    watch('less/styles.less', gulp.registry().get('less'));
}));
