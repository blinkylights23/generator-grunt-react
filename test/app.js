'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-grunt-react:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.babelrc',
      'package.json',
      'app/pug/index.pug',
      'app/jsx/index.jsx',
      'app/jsx/components/Index.jsx',
      'app/css/fonts.css',
      'app/css/fontawesome/fonts/fontawesome-webfont.svg',
      'app/css/fontawesome/fonts/fontawesome-webfont.woff',
      'app/css/fontawesome/fonts/fontawesome-webfont.ttf',
      'app/css/fontawesome/fonts/fontawesome-webfont.woff2',
      'app/css/fontawesome/fonts/FontAwesome.otf',
      'app/css/fontawesome/fonts/fontawesome-webfont.eot',
      'app/css/fontawesome/css/font-awesome.min.css',
      'app/styl/main.styl',
      'Gruntfile.js',
      '.gitignore'
    ]);
  });
});
