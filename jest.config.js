const {
    resolve
} = require('path');
module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1,
    clearMocks: true,
    
    moduleNameMapper: {
        '^@components/(.*)$': resolve(__dirname, './app/components/$1'),
        '^@contexts/(.*)$': resolve(__dirname, './app/contexts/$1'),
        '^@styles/(.*)$': resolve(__dirname, './app/styles/$1'),
        '^@types/(.*)$': resolve(__dirname, './app/types/$1'),
    
    },
};  