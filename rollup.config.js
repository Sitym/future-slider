import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];
export default {
  input: 'future-slider/index.ts',
  output: [
    {
      dir: './packages',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: './packages/esm',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    // postcss({
    //   plugins: [autoprefixer()],
    //   sourceMap: true,
    //   extract: true,
    //   minimize: true,
    //   extensions: ['.css'],
    // }),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      plugins: [autoprefixer()],
      modules: true,
      preserveModules: true,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['future-slider/**/*'],
      exclude: ['packages/**/*', 'node_modules'],
    }),
    cleaner({
      targets: ['./packages'],
    }),
    peerDepsExternal(),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
};
