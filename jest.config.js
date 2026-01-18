/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testTimeout: 50000,
  testMatch: [
    '**/Jest/*.spec.js',
    '**/Jest/*.test.js'
  ],
    transformIgnorePatterns: [
    'node_modules/(?!(axios)/)'
  ]
};

export default config;