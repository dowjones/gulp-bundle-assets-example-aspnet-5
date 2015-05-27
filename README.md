# [gulp-bundle-assets](https://github.com/dowjones/gulp-bundle-assets) Example ASP.NET 5 and MVC 6

> using [gulp-bundle-assets](https://github.com/dowjones/gulp-bundle-assets) for front-end concat, minify, uglify, etc.

Key changes to the default MVC 6 template:

* ADD `bundle.config.js`
* MODIFY `gulpfile.js` to add bundle tasks
* MOVE all assets under `/Content`
* ADD `BundlerService.cs` which reads new `bundle.result.json`
* MODIFY `_Layout.cshtml` to write out bundler script includes

## TODO

* Hook up `gulp build` to VS build process, passing env name
* Cache read of `bundle.result.json` in production so that this is not happening on every request
* Create another example showing custom result script tags (using `asp-fallback-src`)
* Verify/document live reload scenario