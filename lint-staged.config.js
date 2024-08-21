import { ESLint } from 'eslint';

/**
 * @returns {Promise<string[]>}
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#eslint--7-1
 */
const removeIgnoredFiles = async (/** @type {string[]} */ files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  return files.filter((_, i) => !isIgnored[i]);
};

export default {
  '**/*.ts': async (/** @type {string[]} */files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --max-warnings=0 ${filesToLint}`]
  },  '*': 'prettier --write --ignore-unknown',
};
