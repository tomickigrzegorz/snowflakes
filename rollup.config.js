import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from "rollup-plugin-terser";

const { PRODUCTION } = process.env;

export default {
  input: 'sources/script.js',
  output: {
    file: 'docs/snow.min.js',
    format: 'iife',
    name: 'Hohoho',
    sourcemap: PRODUCTION ? false : true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    (!PRODUCTION && serve({ open: true, contentBase: ['docs', 'sources'] })),
    (!PRODUCTION && livereload())
  ]
};