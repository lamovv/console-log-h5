'use strict';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
  },
  plugins: [
    terser()
  ]
}
