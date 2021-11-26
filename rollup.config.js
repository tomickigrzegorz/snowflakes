import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const { PRODUCTION } = process.env;

export default {
  input: 'sources/script.js',
  output: {
    file: 'docs/snow.min.js',
    format: 'iife',
    name: 'Hohoho',
    sourcemap: PRODUCTION ? false : true,
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    PRODUCTION && terser(),
    !PRODUCTION && serve({ open: true, contentBase: ['docs'] }),
    !PRODUCTION && livereload(),
  ],
};
