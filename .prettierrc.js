// https://prettier.io/docs/en/options.html
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
};
