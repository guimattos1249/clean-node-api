module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  verbose: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
