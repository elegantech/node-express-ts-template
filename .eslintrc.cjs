module.exports = {
  root: true,

  overrides: [
    {
      files: ['*.js', '*.cjs'],
      extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
      ],
      plugins: ['node', 'import'],
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.app.json'],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['tsconfig.json'],
          },
        },
      },
      plugins: ['@typescript-eslint', 'typescript-sort-keys', 'node', 'import'],
      extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
      ],

      rules: {
        'import/no-unassigned-import': 'warn',
        'import/newline-after-import': ['warn', { count: 1 }],
        'import/order': [
          'error',
          {
            alphabetize: {
              order: 'asc',
              caseInsensitive: false,
            },
            'newlines-between': 'always',
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
          },
        ],
        'typescript-sort-keys/interface': 'warn',
      },
    },
  ],
};
