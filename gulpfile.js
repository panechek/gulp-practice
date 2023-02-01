const { src, dest, parallel} = require('gulp');

const copyFile = () => {
    return src('src/pages/**/*.pug')
        .pipe(dest('build'));
};

const sassCompile = (done) => {
    console.log('Compile SASS to CSS');

    done();
};

const pugCompile = (done) => {
    console.log('Compile Pug to HTML');

    done();
};

const imagesOptimize = (done) => {
    console.log('Optimize Images');

    done();
};

const firstTask = (done) => {
    console.log('My first task');

    done();
};

exports.default = parallel(firstTask, sassCompile, pugCompile, imagesOptimize);
exports.layoutCompile = parallel(sassCompile, pugCompile);
exports.assetsOptimize = imagesOptimize;
exports.copy = copyFile;