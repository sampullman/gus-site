module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'keyword-spacing': ['error', {
      after: false,
      overrides: {
        return: { after: true },
        else: { after: true },
        do: { after: true },
        from: { after: true },
        import: { after: true },
        export: { after: true },
        try: { after: true },
        const: { after: true },
        let: { after: true },
        default: { after: true },
      },
    }],
    'max-len': ['error', { code: 180, ignorePattern: '^\\s*<path' }],
    'no-param-reassign': [2, { props: false }],
    'object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
