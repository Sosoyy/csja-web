module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/standard', 'plugin:prettier/recommended'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'comma-dangle': 'off',
    curly: ['error', 'all'],
    'eol-last': ['error', 'unix'],
    'linebreak-style': 0,
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'export',
          'block',
          'block-like',
          'if',
          'for',
          'while',
          'switch',
          'do',
          'try',
          'continue',
          'return',
          'throw',
        ],
      },
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'if', 'for', 'while', 'switch', 'do', 'try', 'const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['case'],
        next: ['case'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    semi: 'off',

    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-lone-template': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/no-mutating-props': 'off',

    'prettier/prettier': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
