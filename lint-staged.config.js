module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.json': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
}
