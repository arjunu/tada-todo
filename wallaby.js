import wallabyWebpack from 'wallaby-webpack'
import babel from 'babel'

module.exports = function (wallaby) {
  
  var babelCompiler = wallaby.compilers.babel({
    babel: babel,

    // NOTE: If you're using Babel 6, you should add `presets: ['es2015', 'react']` instead of `stage: 0`.
    // You will also need to
    // npm install babel-core (and require it instead of babel)
    // and
    // npm install babel-preset-es2015 babel-preset-react
    // See http://babeljs.io/docs/plugins/preset-es2015/ and http://babeljs.io/docs/plugins/preset-react/

    presets: ['es2015', 'react']
  });
  
  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });
  
  return {

    files: [
      {pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false},

      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js*', load: false}
    ],

    postprocessor: webpackPostprocessor,
    
    compilers: {
      '**/*.js*': babelCompiler,
      //... also typeScript compiler configuration is required
    },

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};