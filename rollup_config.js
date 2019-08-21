import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';

export default {
  output: {
    format: 'esm',
  },
  acorn: {
    ecmaVersion: 9,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    minify({
      // Options for babel-minify.
      comments: false
    })
  ]
};
