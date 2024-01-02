module.exports = {
    testEnvironment: 'node', // You can use 'jsdom' for browser-like environment in Node.js
    testMatch: ['**/__test__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Patterns to find test files
    moduleNameMapper: {
      // Define any module name mappings for import statements
      '^@/(.*)$': '/src/',
    },
    // You can add more configuration options as needed
  };
  