module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]s?$',
  transform: {
    '\\.[jt]s?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
