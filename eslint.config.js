const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactNative = require('eslint-plugin-react-native');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-native': reactNative,
    },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        // Node globals
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
        // React Native globals
        __DEV__: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Console and debugging
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-alert': 'warn',

      // Code quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-shadow': 'warn',

      // React Native specific
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'error',
      'react-native/no-single-element-style-arrays': 'error',

      // React
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.expo/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'examples/**',
      '*.config.js',
      'babel.config.js',
    ],
  },
];
