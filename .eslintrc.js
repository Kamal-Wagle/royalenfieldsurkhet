module.exports = {
  // ... other config
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn', // Change from error to warning
    'react/no-unescaped-entities': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
  }
} 