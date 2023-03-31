yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react husky lint-staged prettier &&
npm pkg set scripts.prepare="husky install" &&
yarn prepare &&

echo "// https://github.com/jsx-eslint/eslint-plugin-react
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
// https://github.com/prettier/eslint-config-prettier
// https://github.com/prettier/eslint-plugin-prettier
// https://github.com/import-js/eslint-plugin-import
/**
 * Typescript React Eslint
 */
{
  \"root\": true,
  \"env\": {
    \"browser\": true,
    \"es2021\": true
  },
  \"extends\": [
    \"eslint:recommended\",
    \"plugin:react/recommended\",
    \"plugin:@typescript-eslint/recommended\",
    \"plugin:@typescript-eslint/recommended-requiring-type-checking\",
    \"plugin:prettier/recommended\",
    \"plugin:import/recommended\",
    \"plugin:import/typescript\",
    \"prettier\"
  ],
  \"parser\": \"@typescript-eslint/parser\",
  \"parserOptions\": {
    \"ecmaFeatures\": {
      \"jsx\": true
    },
    \"ecmaVersion\": \"latest\",
    \"sourceType\": \"module\",
    \"project\": \"./tsconfig.json\"
  },
  \"plugins\": [
    \"react\",
    \"@typescript-eslint\",
    \"prettier\",
    \"import\"
  ],
  \"rules\": {
    // \"@typescript-eslint/no-explicit-any\": \"off\",    // Disallow the any type
    // \"@typescript-eslint/no-unused-vars\": [\"warn\"], // Disallow unused variables
    \"import/order\": [
      \"error\",
      {
        \"groups\": [
          \"builtin\",
          \"external\",
          \"internal\",
          [
            \"parent\",
            \"sibling\"
          ],
          \"index\"
        ],
        \"alphabetize\": {
          \"order\": \"asc\",
          \"caseInsensitive\": true
        },
        \"newlines-between\": \"always\"
      }
    ],
    \"prettier/prettier\": \"error\",
    \"react/react-in-jsx-scope\": \"off\", // Prevent missing React when using JSX
    \"react/jsx-filename-extension\": [
      \"error\",
      {
        \"extensions\": [
          \".tsx\"
        ]
      }
    ], // Restrict file extensions that may contain JSX
    \"@typescript-eslint/array-type\": [
      \"error\",
      {
        \"default\": \"generic\"
      }
    ], // Require using either T[] or Array<T> for arrays
    \"@typescript-eslint/consistent-type-definitions\": [
      \"error\",
      \"interface\"
    ], // Enforce type definitions to consistently use either interface or type
    \"@typescript-eslint/method-signature-style\": [
      \"error\",
      \"property\"
    ], // Enforce using a particular method signature syntax
    \"@typescript-eslint/naming-convention\": [ // Enforce naming conventions for everything across a codebase
      \"error\",
      {
        \"selector\": [
          \"variable\"
        ],
        \"types\": [
          \"boolean\"
        ],
        \"format\": [
          \"PascalCase\"
        ],
        \"prefix\": [
          \"is\",
          \"should\",
          \"has\",
          \"can\",
          \"did\",
          \"will\"
        ]
      },
      {
        \"selector\": [
          \"default\",
          \"parameter\"
        ],
        \"format\": [
          \"camelCase\",
          \"snake_case\"
        ]
      },
      {
        \"selector\": [
          \"function\",
          \"variable\"
        ],
        \"format\": [
          \"camelCase\",
          \"PascalCase\"
        ]
      },
      {
        \"selector\": [
          \"typeLike\"
        ],
        \"format\": [
          \"PascalCase\"
        ],
        \"custom\": {
          \"regex\": \"^I[A-Z]\",
          \"match\": false
        }
      }
    ],
    \"@typescript-eslint/no-extraneous-class\": [
      \"error\"
    ], // Disallow classes used as namespaces
    \"@typescript-eslint/no-non-null-asserted-nullish-coalescing\": \"error\", // Disallow non-null assertions in the left operand of a nullish coalescing operator
    \"@typescript-eslint/no-useless-empty-export\": \"error\", // Disallow empty exports that don\"t change anything in a module file
    \"@typescript-eslint/prefer-for-of\": \"error\", // Enforce the use of for-of loop over the standard for loop where possible
    \"@typescript-eslint/prefer-optional-chain\": \"error\", // Enforce using concise optional chain expressions instead of chained logical ands
    \"@typescript-eslint/sort-type-union-intersection-members\": [
      \"error\"
    ], // Enforce members of a type union/intersection to be sorted alphabetically
    \"@typescript-eslint/type-annotation-spacing\": [
      \"error\",
      { // Require consistent spacing around type annotations
        \"before\": false,
        \"after\": true,
        \"overrides\": {
          \"arrow\": {
            \"before\": true,
            \"after\": true
          }
        }
      }
    ],
    \"@typescript-eslint/indent\": [
      \"error\",
      2
    ], // Enforce consistent indentation
    \"@typescript-eslint/comma-dangle\": [
      \"error\",
      \"only-multiline\"
    ], // Require or disallow trailing commas
    \"@typescript-eslint/no-redeclare\": [
      \"error\"
    ], // Disallow variable redeclaration
    \"@typescript-eslint/no-use-before-define\": [
      \"error\"
    ], // Disallow the use of variables before they are defined
    \"@typescript-eslint/object-curly-spacing\": [
      \"error\",
      \"always\"
    ], // Enforce consistent spacing inside braces
    \"@typescript-eslint/quotes\": [
      \"error\",
      \"single\",
      {
        \"allowTemplateLiterals\": true
      }
    ], // Enforce the consistent use of either backticks, double, or single quotes
    \"@typescript-eslint/space-before-blocks\": [
      \"error\"
    ], // Enforce consistent spacing before blocks
    \"@typescript-eslint/space-before-function-paren\": [
      \"error\",
      {
        \"anonymous\": \"never\",
        \"asyncArrow\": \"always\",
        \"named\": \"never\"
      }
    ], // Enforce consistent spacing before function parenthesis
    \"@typescript-eslint/space-infix-ops\": [
      \"error\",
      {
        \"int32Hint\": false
      }
    ] // Require spacing around infix operators
  },
  \"overrides\": [
    {
      // enable the rule specifically for TypeScript files
      \"files\": [
        \"*.js\",
        \"*.jsx\",
        \"*.ts\",
        \"*.tsx\"
      ],
      \"rules\": {}
    }
  ],
  \"settings\": {
    \"react\": {
      \"version\": \"detect\"
    },
    \"import/extensions\": [
      \".ts\",
      \".tsx\"
    ],
    \"import/parsers\": {
      \"@typescript-eslint/parser\": [
        \".ts\",
        \".tsx\",
        \".d.ts\"
      ]
    },
    \"import/resolver\": {
      \"typescript\": \"./tsconfig.json\",
      \"node\": {
        \"paths\": [
          \"src\"
        ],
        \"extensions\": [
          \".ts\",
          \".tsx\"
        ]
      }
    }
  },
  \"ignorePatterns\": [
    \"node_modules/\"
  ]
}" > .eslintrc.json

echo "build/
public/
node_modules/
package.json
package-lock.json
yarn.lock
reportWebVitals.ts" > .eslintignore

echo "// https://prettier.io/docs/en/options.html
module.exports = {
  /**
   * Specify the line length that the printer will wrap on.
   */
  printWidth: 80,
  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: 2,
  /**
   * Indent lines with tabs instead of spaces.
   */
  useTabs: false,
  /**
   * Print semicolons at the ends of statements.
   */
  semi: true,
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: true,
  /**
   * Change when properties in objects are quoted.
   */
  quoteProps: 'as-needed',
  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   */
  trailingComma: 'es5',
  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: true,
  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens: 'always',
  /**
   * By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket.
   */
  proseWrap: 'preserve',
  /**
   * Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
   */
  endOfLine: 'auto',
  /**
   * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * Control whether Prettier formats quoted code embedded in the file.
   */
  embeddedLanguageFormatting: 'auto',
};" > .prettierrc.js

echo "build/
node_modules/
public/
package.json
package-lock.json
yarn.lock" > .prettierignore

echo "// https://www.typescriptlang.org/tsconfig
{
  \"compilerOptions\": {
    // Base Options
    /**
     * Specifies which default library (lib.d.ts) to use. The values are \"es3\", \"es5\", \"es6\", \"es2015\", \"es2016\", \"es2017\", \"es2018\", \"es2019\", \"es2020\", \"esnext\".
     */
    \"target\": \"es5\",
    \"lib\": [
      \"dom\",
      \"dom.iterable\",
      \"esnext\"
    ],
    /**
     * Specifies the module system, when generating module code. The values are \"amd\", \"commonJS\", \"es2015\", \"es6\", \"esnext\", \"none\", \"system\", \"umd\".
     */
    \"module\": \"esnext\",
    /**
     * Allow JavaScript files to be imported inside your project, instead of just .ts and .tsx files.
     */
    \"allowJs\": true,
    /**
     * Controls how JSX constructs are emitted in JavaScript files. This only affects output of JS files that started in .tsx files.
     */
    \"jsx\": \"react-jsx\",
    /**
     * This makes room for another tool like Babel, or swc to handle converting the TypeScript file to a file which can run inside a JavaScript environment.
     */
    \"noEmit\": true,
    \"isolatedModules\": true,
    // Strict Type Option
    /**
     * The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness.
     */
    \"strict\": true,
    /**
     * When strictNullChecks is true, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.
     */
    \"strictNullChecks\": false,
    /**
     * In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.
     */
    \"noImplicitAny\": true,
    /**
     * When enabled, this flag causes functions parameters to be checked more correctly.
     */
    \"strictFunctionTypes\": true,
    /**
     * Report errors on unused local variables.
     */
    \"noUnusedLocals\": true,
    /**
     * Report errors on unused parameters in functions.
     */
    \"noUnusedParameters\": false,
    /**
     * When enabled, TypeScript will check all code paths in a function to ensure they return a value.
     */
    \"noImplicitReturns\": true,
    /**
     * Report errors for fallthrough cases in switch statements. Ensures that any non-empty case inside a switch statement includes either break or return.
     */
    \"noFallthroughCasesInSwitch\": true,
    // Module Options
    /**
     * Specifies how modules are resolved for imports. The values are \"node\" and \"classic\".
     */
    \"moduleResolution\": \"node\",
    /**
     * Allow default imports from modules with no default export. This does not affect code emit, just type checking.
     */
    \"allowSyntheticDefaultImports\": true,
    /**
     * By default (with esModuleInterop false or not set) TypeScript treats CommonJS/AMD/UMD modules similar to ES6 modules.
     */
    \"esModuleInterop\": false,
    /**
     * Allows importing modules with a ‘.json’ extension, which is a common practice in node projects.
     */
    \"resolveJsonModule\": true,
    /**
     * Base directory to resolve non-relative module names.
     */
    \"baseUrl\": \"src\",
    // Other Options
    /**
     * Skip type checking of declaration files.
     */
    \"skipLibCheck\": true,
    /**
     * When this option is set, TypeScript will issue an error if a program tries to include a file by a casing different from the casing on disk.
     */
    \"forceConsistentCasingInFileNames\": true,
  },
  /**
   * Specifies an array of filenames or patterns to include in the program.
   */
  \"include\": [
    \"src\"
  ],
  /**
   * Specifies an array of filenames or patterns that should be skipped when resolving include.
   */
  \"exclude\": [
    \"node_modules\"
  ]
}" > tsconfig.json

mkdir -p .vscode && echo "{
    \"editor.formatOnSave\": false,
    \"editor.codeActionsOnSave\": {
        \"source.fixAll.eslint\": true
    },
    /**
     * ESLint
     */
    \"eslint.validate\": [
        {
            \"language\": \"vue\",
            \"autoFix\": true
        },
        {
            \"language\": \"javascript\",
            \"autoFix\": true
        },
        {
            \"language\": \"javascriptreact\",
            \"autoFix\": true
        },
        {
            \"language\": \"typescript\",
            \"autoFix\": true
        },
        {
            \"language\": \"typescriptreact\",
            \"autoFix\": true
        }
    ],
    \"eslint.workingDirectories\": [
        {
            \"mode\": \"auto\"
        }
    ],
    \"eslint.alwaysShowStatus\": true,
    /**
     * prettier extension settings
     */
    \"[javascript]\": {
        \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",
        \"editor.formatOnSave\": true
    },
    \"[typescript]\": {
        \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",
        \"editor.formatOnSave\": true
    },
    \"[javascriptreact]\": {
        \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",
        \"editor.formatOnSave\": true
    },
    \"[typescriptreact]\": {
        \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",
        \"editor.formatOnSave\": true
    },
    \"[html]\": {
        \"editor.defaultFormatter\": \"vscode.html-language-features\",
        \"editor.formatOnSave\": true
    },
    /**
     * json settings
     */
    \"[jsonc]\": {
        \"editor.defaultFormatter\": \"vscode.json-language-features\",
        \"editor.formatOnSave\": true
    },
}" > ./.vscode/settings.json &&

npx husky add .husky/pre-commit "yarn lint-staged"