const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
    browserSync.init({
      server: "build/"
    });
  
    watch('src/sass/*.scss', buildSass);
    watch('src/pages/*.pug', buildPug);
  };

const watchers = () => {
    watch('src/sass/app.scss', (done) => {
        console.log('Something changed');

        done();
    })
};

const buildSass = () => {
    console.log('Compile SASS to CSS');
    
    return src('src/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'));
};

const buildPug = () => {
    console.log('Compile Pug to HTML');

    return src('src/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'));
};

const imagesOptimize = (done) => {
    console.log('Optimize Images');

    done();
};

exports.build = parallel(buildSass, buildPug);
exports.layoutCompile = parallel(buildSass, buildPug);
exports.assetsOptimize = imagesOptimize;
exports.watchers = watchers;
exports.development = browserSyncJob;