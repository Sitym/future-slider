import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default {
  input: 'future-slider/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['future-slider/**/*'],
    }),
    cleaner({
      targets: ['./packages'],
    }),
    peerDepsExternal(),
    commonjs({ extensions: ['.js', '.ts'] }),
    typescript({
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      useTsconfigDeclarationDir: true,
    }),
  ],
};
