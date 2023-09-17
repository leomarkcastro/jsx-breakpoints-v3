import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { getFiles } from './scripts/buildUtils';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'spec.js',
  'spec.ts',
  'spec.jsx',
  'spec.tsx',
  'story.js',
  'story.ts',
  'story.jsx',
  'story.tsx',
];

/** @type {import('postcss').PostCSSPluginConf} */
const postcssConfig = {
  minimize: true,
  sourceMap: true,
  extract: true,
  config: {
    path: './postcss.config.js',
    ctx: null,
  },
};

/** @type {import('rollup').RollupOptions} */
export default {
  // input: ['./src/index.ts', ...getFiles('./src/components', extensions, excludeExtensions)],
  input: './src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  plugins: [
    postcss(postcssConfig),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    typescriptPaths(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
};
