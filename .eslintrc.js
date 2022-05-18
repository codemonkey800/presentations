/**
 * ESLint configuration for napari hub client. All client code is linted using
 * this configuration. That includes JS tooling modules, configuration scripts
 * (next.config.js, plopfile.js, etc.), E2E tests, and application source code.
 *
 * Files with specific configurations are handled using the ESLint `overrides`
 * feature. We use overrides over nested `.eslintrc.js` files (for example
 * `src/.eslintrc.js` and `src/pages/.eslintrc.js`) to make this configuration
 * file the Single Source of Truth for ESLint configuration.
 */

const configs = {
  dev: require.resolve('./eslint/dev'),
  react: require.resolve('./eslint/react'),
  typescript: require.resolve('./eslint/typescript'),
}

module.exports = {
  root: true,
  extends: ['airbnb/base', 'prettier', configs.dev],
  plugins: ['simple-import-sort'],

  overrides: [
    // TypeScript scripts
    {
      files: ['*.ts'],
      extends: [configs.typescript, configs.dev],
    },

    // TypeScript and React source code.
    {
      files: ['./src/**/*.ts{,x}'],
      extends: [configs.typescript, configs.react],
    },

    /*
      Disable explicit return types for TSX files. Prefer inferred return
      types for React components, hooks, and tests:
      https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript
    */
    {
      files: [
        './src/**/*.tsx',
        './src/**/*.hooks.ts',
        './src/hooks/*.ts',
        './src/**/hooks.ts',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },

    {
      files: ['./src/**/*.module.scss.d.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
}
