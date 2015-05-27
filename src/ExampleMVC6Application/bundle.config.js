var srcPath = './Content';

module.exports = {
    bundle: {
        vendor: {
            scripts: [
              {
                  src: './bower_components/jquery/jquery.js',
                  minSrc: './bower_components/jquery/jquery.min.js'
              },
              {
                  src: './bower_components/hammer.js/hammer.js',
                  minSrc: './bower_components/hammer.js/hammer.min.js'
              },
              {
                  src: './bower_components/bootstrap/dist/js/bootstrap.js',
                  minSrc: './bower_components/bootstrap/dist/js/bootstrap.min.js'
              },
              './bower_components/bootstrap-touch/dist/js/bootstrap-touch-carousel.js'
            ],
            styles: [
              {
                  src: './bower_components/bootstrap/dist/css/bootstrap.css',
                  minSrc: './bower_components/bootstrap/dist/css/bootstrap.min.css'
              },
              './bower_components/bootstrap/dist/css/bootstrap-touch-carousel.css'
            ],
            options: {
                useMin: ['production'],
                rev: ['production'],
                watch: {
                    scripts: false,
                    styles: false
                }
            }
        },
        main: {
            scripts: srcPath + '/**/*.js',
            styles: srcPath + '/**/*.css',
            options: {
                uglify: ['production'],
                minCSS: ['production'],
                rev: ['production']
            }
        }
    },
    copy: [
      {
          src: [
            srcPath + '/images/**',
            srcPath + '/favicon.ico'
          ],
          base: srcPath
      },
      {
          src: './bower_components/bootstrap/dist/fonts/*',
          base: './bower_components/bootstrap/dist/',
          watch: false
      },
    ]
};