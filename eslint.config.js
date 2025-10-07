import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.vue'],
    plugins: { vue, prettier },
    languageOptions: {
      parser: await import('vue-eslint-parser'),
      parserOptions: {
        parser: {
          js: await import('@babel/eslint-parser'),
          ts: await import('@typescript-eslint/parser'),
        },
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // Custom rules
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
    },
  },
];
