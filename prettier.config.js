/**
 * Config file for prettier
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 */
const config = {
  trailingComma: 'all', // nextjs handles this
  printWidth: 120, // max 120 chars in line, code is easy to read
  useTabs: false, // use spaces instead of tabs (smart tabs)
  tabWidth: 2, // "visual width" of of the "tab"
  semi: true, // add ; when needed
  singleQuote: true, // '' for stings instead of ""
  bracketSpacing: true, // import { some } ... instead of import {some} ...
  arrowParens: 'always', // braces even for single param in arrow functions (a) => { }
  bracketSameLine: false, // pretty JSX
  endOfLine: 'lf', // 'lf' for linux, 'crlf' for windows, we need to use 'lf' for git
};

export default config;
