// https://github.com/jsx-eslint/eslint-plugin-react
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
// https://github.com/prettier/eslint-config-prettier
// https://github.com/prettier/eslint-plugin-prettier
// https://github.com/import-js/eslint-plugin-import
/**
 * Typescript React Eslint
 */
module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier',
    'import'
  ],
  'rules': {
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Disallow the any type
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'on|handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        multiline: 'last',
        reservedFirst: ['key'],
        shorthandFirst: true,
      },
    ],
    'react/react-in-jsx-scope': 'off', // Prevent missing React when using JSX
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ], // Restrict file extensions that may contain JSX
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ], // Require using either T[] or Array<T> for arrays
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforce type definitions to consistently use either interface or type
    '@typescript-eslint/method-signature-style': ['error', 'property'], // Enforce using a particular method signature syntax
    '@typescript-eslint/naming-convention': [
      // Enforce naming conventions for everything across a codebase
      'error',
      {
        selector: ['variable'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: ['parameter'],
        leadingUnderscore: 'allow',
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: ['function', 'variable'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['variable'],
        modifiers: ['destructured'],
        format: null,
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: ['class'],
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-extraneous-class': ['error'], // Disallow classes used as namespaces
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error', // Disallow non-null assertions in the left operand of a nullish coalescing operator
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-useless-empty-export': 'error', // Disallow empty exports that don"t change anything in a module file
    '@typescript-eslint/prefer-for-of': 'error', // Enforce the use of for-of loop over the standard for loop where possible
    '@typescript-eslint/prefer-optional-chain': 'error', // Enforce using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/sort-type-union-intersection-members': ['error'], // Enforce members of a type union/intersection to be sorted alphabetically
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        // Require consistent spacing around type annotations
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'], // Require or disallow trailing commas
    '@typescript-eslint/no-redeclare': ['error'], // Disallow variable redeclaration
    '@typescript-eslint/no-use-before-define': ['error'], // Disallow the use of variables before they are defined
    '@typescript-eslint/object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ], // Enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/space-before-blocks': ['error'], // Enforce consistent spacing before blocks
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ], // Enforce consistent spacing before function parenthesis
    '@typescript-eslint/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ], // Require spacing around infix operators
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
  'overrides': [
    {
      // enable the rule specifically for TypeScript files
      'files': [
        '*.js',
        '*.jsx',
        '*.ts',
        '*.tsx'
      ],
      'rules': {}
    }
  ],
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/extensions': [
      '.ts',
      '.tsx'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
        '.d.ts'
      ]
    },
    'import/resolver': {
      'typescript': './tsconfig.json',
      'node': {
        'paths': [
          'src'
        ],
        'extensions': [
          '.ts',
          '.tsx'
        ]
      }
    }
  },
  'ignorePatterns': [
    'node_modules/', '.eslintrc.js', 'src/lib/*.js'
  ]
}